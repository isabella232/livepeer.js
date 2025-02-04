import { describe, expect, it } from 'vitest';

import { renderHook } from '../../../test';
import { usePlaybackInfo } from './usePlaybackInfo';

const playbackId = 'a4e8o6mykgkvtxav';

describe('usePlaybackInfo', () => {
  it('mounts', async () => {
    const { result, waitFor } = renderHook(() =>
      usePlaybackInfo({ playbackId }),
    );

    expect(result.current.status).toMatchInlineSnapshot('"loading"');

    await waitFor(() => expect(result.current.status).to.eq('success'), {
      timeout: 5000,
    });

    expect(result.current.data).toMatchInlineSnapshot(`
      {
        "meta": {
          "live": undefined,
          "source": [
            {
              "hrn": "HLS (TS)",
              "type": "html5/application/vnd.apple.mpegurl",
              "url": "https://livepeercdn.com/recordings/c34af47b-bbf2-40ed-ad2d-77abd43860c9/index.m3u8",
            },
          ],
        },
        "type": "vod",
      }
    `);
  });
});
