export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700">
      {children}
    </span>
  );
}
