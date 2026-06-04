type IconProps = {
  className?: string;
  size?: number;
};

export function Growth({ className, size = 24 }: IconProps) {
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
        d="M3 20V4H4V19H21V20H3ZM7 17V11H10V17H7ZM12 17V8H15V17H12ZM17 17V6H20V17H17Z"
        fill="currentColor"
      />
    </svg>
  );
}
