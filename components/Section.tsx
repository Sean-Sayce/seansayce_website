export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pt-16">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-1 text-zinc-400">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
