type IconProps = {
  className?: string;
  size?: number;
};

export function Rocket({ className, size = 24 }: IconProps) {
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
        d="M14.5 2C18.5 2 22 5.5 22 9.5C22 11 21.5 12.4 20.5 13.5L17 17V22L13 20L11 22L9 20L7 22L5 18L7 16L4 14L6 10L11 7L14.5 3.5C15.6 2.5 17 2 18.5 2H14.5ZM16 7C17.1 7 18 7.9 18 9C18 10.1 17.1 11 16 11C14.9 11 14 10.1 14 9C14 7.9 14.9 7 16 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
