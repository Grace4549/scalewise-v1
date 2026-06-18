import { SearchCheck, TrendingUp, Brain } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const services = [
  {
    icon: SearchCheck,
    title: "Solve a Problem",
    subtitle: "Consultancy",
    description:
      "Get expert help diagnosing challenges and implementing practical solutions.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    subtitle: "Business Coaching",
    description:
      "Receive ongoing guidance to improve leadership, strategy and sustainable growth.",
  },
  {
    icon: Brain,
    title: "Lead with Confidence",
    subtitle: "Leadership & Founder Wellness",
    description:
      "Support for stress, burnout and the mental challenges of running a business.",
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
                <div className="mb-6 inline-flex rounded-2xl bg-emerald-50 p-4">
                  <Icon className="text-emerald-600" size={30} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
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