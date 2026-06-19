import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gold-500/20 bg-navy-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 font-bold text-navy-900">
            S
          </div>

          <div>
            <h2 className="font-['Manrope'] text-xl font-bold text-white">
              ScaleWise
            </h2>

            <p className="text-xs text-slate-400">
              Business Expertise
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-slate-300 hover:text-gold-500">
            Find Expert
          </a>

          <a href="#" className="text-slate-300 hover:text-gold-500">
            Become an Expert
          </a>

          <a href="#" className="text-slate-300 hover:text-gold-500">
            Login
          </a>

          <button className="flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-3 font-semibold text-navy-900 transition hover:bg-gold-600">
            Get Started

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
