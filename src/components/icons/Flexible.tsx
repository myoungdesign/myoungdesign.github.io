type IconProps = {
  className?: string;
  size?: number;
};

export function Flexible({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2ZM18 14L18.75 16.25L21 17L18.75 17.75L18 20L17.25 17.75L15 17L17.25 16.25L18 14ZM6 14L6.75 16.25L9 17L6.75 17.75L6 20L5.25 17.75L3 17L5.25 16.25L6 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
