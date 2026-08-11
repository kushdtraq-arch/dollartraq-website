import { Metadata } from "next";
import Blog from "@/pages/Blog";

export const metadata: Metadata = {
  title: 'Freight Fraud & Carrier Compliance Insights | Dollar Traq',
  description: 'Analysis on freight fraud tactics, FMCSA data, carrier vetting standards and broker liability — written for the people actually running the desk.',
};

export default function ComparePage() {
  return (
    <Blog />
  );
}