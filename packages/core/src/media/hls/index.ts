import Hls, { ErrorTypes, Events, HlsConfig } from 'hls.js';

import { noop } from '../../utils';

import { isClient } from '../browser';

import { getMetricsReportingUrl, reportMediaMetrics } from '../metrics';
import { HlsSrc } from '../src';

export const VIDEO_HLS_INITIALIZED_ATTRIBUTE = 'data-hls-initialized';

export type VideoConfig = { autoplay?: boolean };
export type HlsVideoConfig = Partial<HlsConfig> & { autoplay?: boolean };

/**
 * Checks if hls.js can play in the browser.
 */
export const isHlsSupported = () => (isClient() ? Hls.isSupported() : true);

export const createNewHls = <TElement extends HTMLMediaElement>(
  source: HlsSrc,
  element: TElement,
  onLive: (v: boolean) => void,
  onDuration: (v: number) => void,
  onCanPlay: () => void,
  config?: HlsVideoConfig,
): {
  destroy: () => void;
} => {
  // do not attach twice
  if (element.getAttribute(VIDEO_HLS_INITIALIZED_ATTRIBUTE) === 'true') {
    return {
      destroy: noop,
    };
  }

  element.setAttribute(VIDEO_HLS_INITIALIZED_ATTRIBUTE, 'true');

  const hls = new Hls({
    maxBufferLength: 15,
    maxMaxBufferLength: 60,
    ...config,
  });

  const onDestroy = () => {
    hls?.destroy?.();
    element?.removeAttribute?.(VIDEO_HLS_INITIALIZED_ATTRIBUTE);
  };

  if (element) {
    hls.attachMedia(element);
  }

  hls.on(Events.LEVEL_LOADED, async (_e, data) => {
    const { live, totalduration: duration } = data.details;

    onLive(Boolean(live));
    onDuration(duration ?? 0);
  });

  hls.on(Events.MEDIA_ATTACHED, async () => {
    hls.loadSource(source.src);

    hls.on(Events.MANIFEST_PARSED, (_event, _data) => {
      onCanPlay();

      if (config?.autoplay && element) {
        try {
          element.muted = true;
        } catch (e) {
          console.log(
            'Unable to autoplay prior to user interaction with the dom.',
          );
        }
      }
    });

    const metricReportingUrl = await getMetricsReportingUrl(source.src);
    if (metricReportingUrl) {
      reportMediaMetrics(element, metricReportingUrl);
    } else {
      console.log(
        'Not able to report player metrics given the source url',
        source,
      );
    }
  });

  let retryCount = 0;

  hls.on(Events.ERROR, async (_event, data) => {
    if (data.fatal) {
      switch (data.type) {
        case ErrorTypes.NETWORK_ERROR:
          // test if we received a custom tag, and backoff retry if this is the case
          if (
            data?.response?.data?.toString()?.includes('Stream open failed')
          ) {
            await new Promise((r) => setTimeout(r, 1000 * ++retryCount));
            hls?.recoverMediaError();
          } else {
            hls?.startLoad();
          }
          break;
        case ErrorTypes.MEDIA_ERROR:
          hls?.recoverMediaError();
          break;
        default:
          onDestroy();
          break;
      }
    }
  });

  return {
    destroy: onDestroy,
  };
};
