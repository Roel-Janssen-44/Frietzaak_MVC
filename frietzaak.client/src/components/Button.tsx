import { Link } from "react-router-dom";

export default function Button({
  priority,
  link,
  children,
  className,
  onClick,
}: {
  priority: "primary" | "secondary" | "tertiary";
  link?: string;
  children: string | JSX.Element;
  className?: string;
  onClick?: Function;
}) {
  if (link) {
    return (
      <Link
        to={link}
        className={`relative block px-3 py-2 border-dark font-title rounded-sm
                ${
                  priority === "primary"
                    ? "bg-primary text-white"
                    : priority === "secondary"
                    ? "bg-secondary text-white"
                    : "bg-transparent text-dark border-2 border-black"
                }
            ${className ? className : ""}`}
      >
        {children}
      </Link>
    );
  } else if (!onClick) {
    return (
      <button
        className={`relative block px-3 py-2 border-dark font-title rounded-sm
                ${
                  priority === "primary"
                    ? "bg-primary text-white"
                    : priority === "secondary"
                    ? "bg-secondary text-white"
                    : "bg-transparent text-dark border-2 border-black"
                }
            ${className ? className : ""}`}
      >
        {children}
      </button>
    );
  } else if (onClick) {
    return (
      <button
        onClick={() => onClick()}
        className={`relative block px-3 py-2 border-dark font-title rounded-sm
                ${
                  priority === "primary"
                    ? "bg-primary text-white"
                    : priority === "secondary"
                    ? "bg-secondary text-white"
                    : "bg-transparent text-dark border-2 border-black"
                }
            ${className ? className : ""}`}
      >
        {children}
      </button>
    );
  }
}
