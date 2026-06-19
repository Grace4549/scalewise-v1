import { Star } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import Button from "./ui/Button";

const experts = [
  {
    name: "Amara Njoki",
    industry: "Beauty & Salons",
    experience: "8 Years",
    rating: "4.9",
    price: "KES 3,500",
  },
  {
    name: "Cynthia Waweru",
    industry: "E-commerce & Retail",
    experience: "7 Years",
    rating: "5.0",
    price: "KES 5,000",
  },
  {
    name: "Felix Otieno",
    industry: "Tech Startups",
    experience: "14 Years",
    rating: "4.8",
    price: "KES 7,500",
  },
];

export default function FeaturedExperts() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Featured Experts"
          title="Learn From Proven Professionals"
          description="Connect with experienced experts who have helped businesses grow."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <Card key={expert.name}>
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-3xl font-bold text-slate-500">
                {expert.name.charAt(0)}
              </div>

              <h3 className="text-center text-xl font-bold">
                {expert.name}
              </h3>

              <p className="mt-1 text-center text-gold-700">
                {expert.industry}
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>{expert.experience}</span>
                </div>

                <div className="flex justify-between">
                  <span>Rating</span>

                  <span className="flex items-center gap-1">
                    <Star
                      size={16}
                      fill="currentColor"
                      className="text-gold-500"
                    />
                    {expert.rating}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>From</span>
                  <span className="font-semibold">{expert.price}/hr</span>
                </div>
              </div>

              <div className="mt-8">
                <Button>Book Session</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
