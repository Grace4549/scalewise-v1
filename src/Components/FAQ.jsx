import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const faqs = [
  {
    question: "How do I book an expert?",
    answer:
      "Search for an expert, choose an available time, pay securely and you'll receive your meeting link instantly.",
  },
  {
    question: "Are all experts verified?",
    answer:
      "Yes. Every expert goes through our verification process before appearing on ScaleWise.",
  },
  {
    question: "Can I reschedule a session?",
    answer:
      "Yes. You can reschedule within the cancellation policy shown during booking.",
  },
  {
    question: "How are payments handled?",
    answer:
      "All payments are securely processed through ScaleWise. Off-platform payments are not allowed.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before booking an expert."
        />

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h3 className="text-lg font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}