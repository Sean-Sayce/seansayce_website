export function Footer({ name }: { name: string }) {
  return (
    <footer className="mt-24 border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} {name}. All rights reserved.
    </footer>
  );
}
