type TimerBoltProps = {
  className?: string;
  size?: number;
};

export function TimerBolt({ className, size = 24 }: TimerBoltProps) {
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
      <g clipPath="url(#clip0_2215_4308)">
        <path
          d="M20.4834 7.67773L19.5088 13.8711H23.6499L16.9863 23.0347L18.5347 17.2261H14.1499L20.4834 7.67773Z"
          fill="currentColor"
        />
        <path
          d="M10 4C13.4313 4 16.4372 5.81943 18.1069 8.5459L17.4893 9.47754C16.0546 6.81207 13.2391 5 10 5C5.30558 5 1.5 8.80558 1.5 13.5C1.5 18.1944 5.30558 22 10 22C12.6206 22 14.9906 20.8136 16.5498 18.9492L15.875 21C14.2368 22.342 12.283 23 10 23C4.75329 23 0.5 18.7467 0.5 13.5C0.5 8.25329 4.75329 4 10 4Z"
          fill="currentColor"
        />
        <path
          d="M10.75 13.5L10.582 13.8735L7.9585 16.2061L7.29395 15.4585L9.75 13.2754V7.75H10.75V13.5Z"
          fill="currentColor"
        />
        <path
          d="M4.25732 3.56299L4.74268 4.43701C3.96469 4.86898 3.56658 5.18945 2.84082 5.86572L2.15918 5.13428C2.92115 4.42426 3.38517 4.04725 4.25732 3.56299Z"
          fill="currentColor"
        />
        <path
          d="M15.9927 3.56299C16.8648 4.04725 17.3288 4.42426 18.0908 5.13428L17.4092 5.86572C16.6834 5.18945 16.2853 4.86898 15.5073 4.43701L15.9927 3.56299Z"
          fill="currentColor"
        />
        <path d="M12 0.5V1.5H10.5V3H9.5V1.5H8V0.5H12Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_2215_4308">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
