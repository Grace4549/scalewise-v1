import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const industries = [
  "Agriculture",
  "Architecture",
  "Automotive",
  "Beauty",
  "Construction",
  "Education",
  "Finance",
  "Healthcare",
  "Hospitality",
  "Information Technology",
  "Legal",
  "Logistics",
  "Manufacturing",
  "Marketing",
  "Professional Services",
  "Real Estate",
  "Restaurants",
  "Retail",
  "Tourism",
  "Wholesale",
].sort();

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Browse Industries"
          title="Find Expertise Across Every Industry"
          description="Choose your industry to discover verified experts with real-world experience."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <button
              key={industry}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg hover:text-emerald-600"
            >
              {industry}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}