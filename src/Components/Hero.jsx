import { ArrowRight, CheckCircle } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        
        <div>

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Business Expertise On Demand
          </span>

          <h1 className="mt-8 font-['Manrope'] text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Business Expertise
            <br />
            That Moves
            <span className="text-emerald-600"> Companies </span>
            Forward.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Connect with verified business experts for consultancy,
            business coaching and business wellness.
            Solve challenges, unlock growth and build your business
            with confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Find an Expert
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:border-emerald-600 hover:text-emerald-600">
              Become an Expert
              <ArrowRight size={18}/>
            </button>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">

            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600"/>
              <span>Verified Experts</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600"/>
              <span>Secure Payments</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600"/>
              <span>Online Sessions</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-600"/>
              <span>12+ Industries</span>
            </div>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="flex h-[520px] w-full max-w-md items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white shadow-xl">

            <p className="text-center text-slate-500">
              Hero illustration coming next
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;