type FormFunctionProps = {
  className?: string;
  size?: number;
};

export function FormFunction({ className, size = 24 }: FormFunctionProps) {
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
        d="M18.5 4.64746L22.5 3.89746V19.4023L5.5 23.1211V19.2461L1.5 20.1211V4.08496L18.5 0.897461V4.64746ZM2.5 4.91406V18.8789L5.5 18.2227V7.08496L17.5 4.83496V2.10156L2.5 4.91406Z"
        fill="currentColor"
      />
    </svg>
  );
}
