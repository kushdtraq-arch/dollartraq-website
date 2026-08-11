import { Metadata } from "next";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: 'Contact Dollar Traq | Sales, Support & Partnerships',
  description: 'Reach the Dollar Traq team about carrier vetting, DT Pay, integrations, partnerships or support. Tell us what you run and we\'ll route you to the right person.',
};

export default function ComparePage() {
  return (
    <Contact />
  );
}