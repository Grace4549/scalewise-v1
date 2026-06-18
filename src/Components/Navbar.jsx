import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white">
            S
          </div>

          <div>
            <h2 className="font-['Manrope'] text-xl font-bold">
              ScaleWise
            </h2>

            <p className="text-xs text-slate-500">
              Business Expertise
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-slate-700 hover:text-emerald-600">
            Find Expert
          </a>

          <a href="#" className="text-slate-700 hover:text-emerald-600">
            Become an Expert
          </a>

          <a href="#" className="text-slate-700 hover:text-emerald-600">
            Login
          </a>

          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Get Started

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;