import { Metadata } from "next";
import FAQs from "@/pages/FAQs";

export const metadata: Metadata = {
  title: 'Freight Broker Software FAQs | Dollar Traq',
  description: 'Straight answers on carrier data sources, AI limits, human approval, DT Pay mechanics, KYC, pricing, and whether you have to replace your current tools.',
};

export default function ComparePage() {
  return (
    <FAQs />
  );
}