type SyncProps = {
  className?: string;
  size?: number;
};

export function Sync({ className, size = 24 }: SyncProps) {
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
        d="M22.5 20.7867H17.5V23.1735L12.5 20.2867L17.5 17.4V19.7867H21.5V4.28674H14.25V3.28674H22.5V20.7867Z"
        fill="currentColor"
      />
      <path
        d="M6.5 0.900024L11.5 3.78674L6.5 6.67346V4.28674H2.5V19.7867H9.75V20.7867H1.5L1.5 3.28674H6.5V0.900024Z"
        fill="currentColor"
      />
    </svg>
  );
}
