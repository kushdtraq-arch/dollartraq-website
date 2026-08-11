import { Metadata } from "next";
import PlatformOverview from "@/pages/PlatformOverview";

export const metadata: Metadata = {
  title: 'Platform Architecture & Guardrails | Dollar Traq',
  description: 'How Fleetra orchestrates four agents over an owned FMCSA warehouse, a document layer and Stripe payment rails — with approval gates built in as graph nodes.',
};

export default function Platform() {
  return (
    < PlatformOverview/>
  );
}