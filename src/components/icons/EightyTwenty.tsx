type EightyTwentyProps = {
  className?: string;
  size?: number;
};

export function EightyTwenty({ className, size = 24 }: EightyTwentyProps) {
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
        d="M12 1.5C12.5263 1.5 13.0438 1.54029 13.5498 1.61523L13.2949 2.58789C12.8717 2.53032 12.4394 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 11.6661 21.4808 11.3366 21.4473 11.0117L22.416 10.6885C22.4696 11.1184 22.5 11.5558 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5Z"
        fill="currentColor"
      />
      <path
        d="M15 2C18.1732 2.81672 20.7367 5.15182 21.8701 8.18457C21.9917 8.51005 22.0969 8.84403 22.1846 9.18457L12.25 12.5L15 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
