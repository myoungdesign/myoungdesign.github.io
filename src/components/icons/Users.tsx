type IconProps = {
  className?: string;
  size?: number;
};

export function Users({ className, size = 24 }: IconProps) {
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
        d="M9 4C11.2 4 13 5.8 13 8C13 10.2 11.2 12 9 12C6.8 12 5 10.2 5 8C5 5.8 6.8 4 9 4ZM9 5C7.3 5 6 6.3 6 8C6 9.7 7.3 11 9 11C10.7 11 12 9.7 12 8C12 6.3 10.7 5 9 5ZM17 6C18.7 6 20 7.3 20 9C20 10.7 18.7 12 17 12C15.3 12 14 10.7 14 9C14 7.3 15.3 6 17 6ZM17 7C15.9 7 15 7.9 15 9C15 10.1 15.9 11 17 11C18.1 11 19 10.1 19 9C19 7.9 18.1 7 17 7ZM9 13C13.4 13 17 14.8 17 17V20H1V17C1 14.8 4.6 13 9 13ZM17 14C20.3 14 23 15.3 23 17V20H18V17C18 15.9 17.6 14.9 17 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
