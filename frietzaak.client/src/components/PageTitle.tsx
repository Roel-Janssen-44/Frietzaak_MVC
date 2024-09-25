export default function Button({
  color,
  title,
  className,
}: {
  color: "primary" | "secondary" | "dark";
  title: string;
  className?: string;
}) {
  return (
    <h1
      className={`font-title mb-6 text-3xl relative block ${className}
            ${
              color === "primary"
                ? "text-primary"
                : color === "secondary"
                ? "text-secondary"
                : "text-dark"
            }
        `}
    >
      {title}
    </h1>
  );
}
