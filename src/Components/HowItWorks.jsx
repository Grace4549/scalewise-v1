import { Search, CalendarDays, TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const steps = [
  {
    icon: Search,
    title: "Find the Right Expert",
    description:
      "Search by industry and browse verified experts based on your business needs.",
  },
  {
    icon: CalendarDays,
    title: "Book Your Session",
    description:
      "Choose a suitable time, pay securely and receive your meeting invitation.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description:
      "Implement expert advice, solve challenges and achieve measurable results.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="How It Works"
          title="Three Simple Steps"
          description="Getting expert business support has never been easier."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card key={step.title} className="relative text-center">

                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                  {index + 1}
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <Icon size={34} className="text-emerald-600" />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}