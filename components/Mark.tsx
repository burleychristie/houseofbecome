export default function Mark({
  className = ""
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M12 52V30C12 18.954 20.954 10 32 10s20 8.954 20 20v22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 52V33c0-5.523 4.477-10 10-10s10 4.477 10 10v19"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M32 36v8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
