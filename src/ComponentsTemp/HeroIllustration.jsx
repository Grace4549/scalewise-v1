import {
  TrendingUp,
  Users,
  Briefcase,
  Calendar,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative flex h-140 items-center justify-center">

      {/* Main Card */}

      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Expert Session
            </p>

            <h3 className="text-xl font-bold text-slate-900">
              Sarah Mitchell
            </h3>

            <p className="text-sm text-emerald-600">
              Business Growth Expert
            </p>
          </div>

          <div className="rounded-full bg-emerald-100 p-3">
            <Briefcase className="text-emerald-600" />
          </div>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <Calendar size={20} />
              <span>60 Minute Session</span>
            </div>

            <span className="font-semibold">$75</span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <Star
                size={20}
                className="text-yellow-500"
                fill="currentColor"
              />
              <span>4.9 Rating</span>
            </div>

            <span>287 Reviews</span>
          </div>

          <button className="mt-4 w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white hover:bg-emerald-700">
            Book Session
          </button>

        </div>
      </div>

      {/* Floating Card */}

      <div className="absolute -left-4 top-20 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

        <div className="flex items-center gap-3">
          <TrendingUp className="text-emerald-600" />

          <div>
            <p className="text-xs text-slate-500">
              Revenue Growth
            </p>

            <p className="font-bold text-slate-900">
              +34%
            </p>
          </div>
        </div>

      </div>

      {/* Floating Card */}

      <div className="absolute -right-4 bottom-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

        <div className="flex items-center gap-3">
          <Users className="text-blue-600" />

          <div>
            <p className="text-xs text-slate-500">
              Team Growth
            </p>

            <p className="font-bold">
              18 Employees
            </p>
          </div>
        </div>

      </div>

      {/* Floating Card */}

      <div className="absolute right-12 top-6 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-xl">

        <CheckCircle size={18} />

        Verified Expert

      </div>

    </div>
  );
}