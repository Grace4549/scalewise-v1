import { Star } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const testimonials = [
  {
    name: "Jane Wanjiku",
    company: "Retail Business Owner",
    review:
      "ScaleWise connected me with an expert who helped increase our monthly sales by over 30% within three months.",
  },
  {
    name: "Brian Otieno",
    company: "Restaurant Founder",
    review:
      "Instead of guessing, I got practical advice from someone who had already built successful restaurants.",
  },
  {
    name: "Grace Njeri",
    company: "Beauty Entrepreneur",
    review:
      "The coaching sessions completely changed how I lead my team and plan for growth.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Business Owners Who Grew With ScaleWise"
          description="Real stories from entrepreneurs who found the right expert."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <div className="mb-5 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-gold-500"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-gold-700">
                  {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
