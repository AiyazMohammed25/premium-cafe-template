export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-6 lg:px-12 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold tracking-widest uppercase">The Brew Bar</h1>
      <button className="hidden md:block border border-neutral-100 px-5 py-2 text-sm uppercase tracking-wider hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
        Book a Table
      </button>
    </nav>
  );
}
