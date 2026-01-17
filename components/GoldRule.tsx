export default function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-gilded/60 to-transparent ${className}`}
    />
  );
}
