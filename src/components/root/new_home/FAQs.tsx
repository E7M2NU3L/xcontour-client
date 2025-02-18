import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  return (
    <section className="pb-20">
      <main className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl tracking-tight font-semibold">Got Quesionts?, We're here to help</h1>
        <p className="text-lg text-muted-foreground tracking-tight mt-5">you can asks your queries and post any more support through aemmanuelcodes@gmail.com and you will be responded within 2 business days with proper solution.</p>
        <section className="inline-flex items-center gap-x-3 justify-center md:justify-start mt-8 text-center">
            <Button className="" asChild size="sm">
              <Link to="/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </section>
      </main>
      <main className="max-w-2xl mx-auto mt-14">
      <Accordion type="single" collapsible className="w-full">
       {items.map(({question, answer}, index) => (
        <AccordionItem key={index} value={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>
            {answer}
          </AccordionContent>
        </AccordionItem>
       ))}
       </Accordion>
      </main>
    </section>
  );
};
