export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}
