export default function TextFill({ text }: { text: string }) {
  return (
    <span className="text-fill">
      {text}
      <span className="text-fill-overlay" aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
