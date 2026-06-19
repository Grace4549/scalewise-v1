import { ArrowRight, CheckCircle } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gold-50 via-white to-slate-50">
      {/* Background Blobs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gold-100/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl"></div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700 shadow-sm">
              Business Expertise On Demand
            </span>

            <h1 className="mt-8 font-['Manrope'] text-4xl font-extrabold leading-[1.15] text-slate-900 lg:text-6xl">
              Business Expertise
              <br />
              That Moves Companies
              <br />
              <span className="text-gold-600">Forward.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Connect with verified business experts for consultancy,
              business coaching and leadership & founder wellness.
              Solve challenges, unlock growth and build your business
              with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-navy-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-navy-600 hover:shadow-xl">
                Find the Right Expert
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:text-gold-700 hover:shadow-lg">
                Become an Expert
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold-600" />
                <span>Verified Experts</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold-600" />
                <span>Secure Payments</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold-600" />
                <span>Online Sessions</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-gold-600" />
                <span>13+ Industries</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
