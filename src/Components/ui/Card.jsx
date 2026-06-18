export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}