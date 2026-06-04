type IconProps = {
  className?: string;
  size?: number;
};

export function Switch({ className, size = 24 }: IconProps) {
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
        d="M4 7H17.5L14 3.5L14.7 2.8L19.4 7.5L14.7 12.2L14 11.5L17.5 8H4V7ZM20 17H6.5L10 13.5L9.3 12.8L4.6 17.5L9.3 22.2L10 21.5L6.5 18H20V17Z"
        fill="currentColor"
      />
    </svg>
  );
}
