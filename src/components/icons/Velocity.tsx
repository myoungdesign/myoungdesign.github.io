type IconProps = {
  className?: string;
  size?: number;
};

export function Velocity({ className, size = 24 }: IconProps) {
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
        d="M12 3C7 3 3 7 3 12C3 14.5 4 16.7 5.6 18.4L4.9 19.1L6.3 20.5L7 19.8C8.4 20.9 10.1 21.5 12 21.5C16.5 21.5 20 18 20 13.5C20 11.5 19.3 9.7 18 8.4L19.4 7L18 5.6L16.6 7C15.3 6 13.7 5.5 12 5.5V3ZM12 7.5C13.2 7.5 14.3 7.9 15.2 8.5L12.7 11L11.3 9.6L9.9 11L11.3 12.4C10.5 13.2 10 14.3 10 15.5H8C8 11.4 9.8 8 12 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
