type ChartLineUpProps = {
  className?: string;
  size?: number;
};

export function ChartLineUp({ className, size = 24 }: ChartLineUpProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 5V21H23V22H1V21H3.5V14H7.5V11H11.5V8H15.5V5H20.5ZM4.5 21H7.5V15H4.5V21ZM8.5 21H11.5V12H8.5V21ZM12.5 21H15.5V9H12.5V21ZM16.5 21H19.5V6H16.5V21Z"
        fill="currentColor"
      />
      <path
        d="M14.5 2V4.75H13.5V3.54785L3.81445 11.3887L3.18555 10.6113L12.5879 3H11.5V2H14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
