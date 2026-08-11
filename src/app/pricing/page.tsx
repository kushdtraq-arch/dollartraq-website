import { Metadata } from "next";
import Pricing from "@/pages/Pricing";

export const metadata: Metadata = {
  title: 'Pricing: Plans from $299/mo + 1.2% DT Pay | Dollar Traq',
  description: 'Starter $299, Growth $599 and Enterprise $999 per month, plus a flat 1.2% DT Pay fee. Vetting, monitoring, tracking and payments included in every plan.',
};

export default function PricingPage() {
  return (
    < Pricing/>
  );
}