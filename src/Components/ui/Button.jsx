export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-emerald-600 hover:text-emerald-600",

    ghost:
      "text-slate-700 hover:text-emerald-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}