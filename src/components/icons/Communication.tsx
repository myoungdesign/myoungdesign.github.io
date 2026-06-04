type CommunicationProps = {
  className?: string;
  size?: number;
};

export function Communication({ className, size = 24 }: CommunicationProps) {
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
      <path d="M18 14.5H6V13.5H18V14.5Z" fill="currentColor" />
      <path d="M18 11H6V10H18V11Z" fill="currentColor" />
      <path d="M18 7.5H6V6.5H18V7.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 2V19H10.6621L4.18164 23.7139L5.35938 19H1.5V2H22.5ZM2.5 18H6.64062L5.81836 21.2861L10.3379 18H21.5V3H2.5V18Z"
        fill="currentColor"
      />
    </svg>
  );
}
