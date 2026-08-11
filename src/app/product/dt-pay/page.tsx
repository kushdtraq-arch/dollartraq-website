import { Metadata } from "next";
import ProductDtPay from "@/pages/ProductDtPay";

export const metadata: Metadata = {
  title: 'DT Pay: Conditional Carrier Payment Release | Dollar Traq',
  description: 'Commit funds before pickup; release in ~90 seconds once the POD is AI-verified and a human approves. Flat 1.2% on Stripe rails, KYC-verified carriers only.',
};

export default function Solution() {
  return (
    < ProductDtPay/>
  );
}