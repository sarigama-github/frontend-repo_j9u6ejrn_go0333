export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-blue-500/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-white text-lg">DevOnline</a>
        <nav className="hidden md:flex items-center gap-6 text-blue-100">
          <a href="#servicii" className="hover:text-white">Servicii</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/test" className="hover:text-white">Test</a>
        </nav>
      </div>
    </header>
  );
}
