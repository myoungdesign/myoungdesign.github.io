type IconProps = {
  className?: string;
  size?: number;
};

export function Star({ className, size = 24 }: IconProps) {
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
        d="M12 2L14.85 8.7L22 9.5L16.6 14.4L18.2 21.5L12 17.8L5.8 21.5L7.4 14.4L2 9.5L9.15 8.7L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
