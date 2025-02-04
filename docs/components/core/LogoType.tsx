import { useTheme } from 'next-themes';

type Props = {
  title?: string;
};

export function LogoType({ title = 'livepeer logo' }: Props) {
  const { theme } = useTheme();

  return (
    <svg
      className="fill-current h-full w-auto"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <circle
        cx="512"
        cy="512"
        r="512"
        fill={theme === 'light' ? '#131418' : 'white'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M292 662L292 762L392 762L392 662L292 662ZM292 462L292 562L392 562L392 462L292 462ZM692 462L692 562L792.001 562L792.001 462L692 462ZM292 362L292 262L392 262L392 362L292 362ZM492 461.999L492 361.999L592 361.999L592 461.999L492 461.999ZM492 561.999L492 661.999L592 661.999L592 561.999L492 561.999Z"
        fill={theme === 'light' ? 'white' : '#131418'}
      />
    </svg>
  );
}
