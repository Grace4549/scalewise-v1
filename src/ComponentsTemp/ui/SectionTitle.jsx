export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-600">
          {eyebrow}
        </p>
      )}

      <h2 className="font-['Manrope'] text-4xl font-extrabold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}