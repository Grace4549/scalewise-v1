import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const industries = [
  "Agriculture & Agribusiness",
  "Beauty & Salons",
  "Construction & Contracting",
  "Education & Training",
  "E-commerce & Retail",
  "Financial Services",
  "Healthcare & Clinics",
  "Hospitality & Tourism",
  "Logistics & Transport",
  "Manufacturing & SMEs",
  "Real Estate",
  "Restaurants & Food Business",
  "Tech Startups",
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
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg hover:text-gold-700"
            >
              {industry}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
