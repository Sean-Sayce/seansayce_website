type Experience = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-zinc-100">{item.role}</p>
          <p className="text-sm text-zinc-400">{item.org}</p>
        </div>
        <p className="text-xs text-zinc-500">{item.dates}</p>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
