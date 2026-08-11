import { Metadata } from "next";
import FraudPrevention from "@/pages/FraudPrevention";

export const metadata: Metadata = {
  title: 'Freight Fraud Prevention & Chameleon Detection | Dollar Traq',
  description: 'Catch double brokering, MC takeover and chameleon carriers. Domain-age, lookalike and phone-vs-FMCSA scans on every carrier email, plus census-diff alerts.',
};

export default function Fraud() {
  return (
    < FraudPrevention/>
  );
}