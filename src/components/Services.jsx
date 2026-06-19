import { Search, Target, TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const services = [
  {
    icon: Search,
    title: "Not Sure Where to Start?",
    subtitle: "Business Discovery",
    description:
      "An open conversation with an experienced expert. Ideal when you are not sure what the problem is, need general advice, or just want to talk it through.",
  },
  {
    icon: Target,
    title: "Solve a Specific Problem",
    subtitle: "Consultancy",
    description:
      "You have identified a challenge in your business and need focused expert diagnosis, clear recommendations, and an action plan.",
  },
  {
    icon: TrendingUp,
    title: "Build Long-Term Growth",
    subtitle: "Growth Strategy",
    description:
      "Structured 3-month or 6-month plans with bi-weekly sessions, a full strategy roadmap, and accountability check-ins.",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Three Ways ScaleWise Helps You Succeed"
          description="Choose the type of support that best matches your business needs."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>
                <div className="mb-6 inline-flex rounded-2xl bg-gold-50 p-4">
                  <Icon className="text-gold-600" size={30} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-gold-700">
                  {service.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
