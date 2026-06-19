import { Search } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const popularIndustries = [
  "Agriculture & Agribusiness",
  "Beauty & Salons",
  "Construction & Contracting",
  "Financial Services",
  "Healthcare & Clinics",
  "Restaurants & Food Business",
  "E-commerce & Retail",
  "Tech Startups",
];

export default function SearchSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Find Experts"
          title="Find the Right Expert for Your Industry"
          description="Search by industry or choose one of our most popular categories."
        />

        <div className="mx-auto max-w-3xl">

          <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-sm">

            <Search className="mr-3 text-slate-400" size={22} />

            <input
              type="text"
              placeholder="Search industries..."
              className="w-full bg-transparent outline-none"
            />

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {popularIndustries.map((industry) => (
              <button
                key={industry}
                className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium transition hover:border-gold-500 hover:text-gold-700"
              >
                {industry}
              </button>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}
