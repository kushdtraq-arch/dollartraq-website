import { Metadata } from "next";
import CarrierOnboarding from "@/pages/CarrierOnboarding";

export const metadata: Metadata = {
  title: 'Carrier Onboarding & KYC for Brokers | Dollar Traq',
  description: 'Digital carrier packets, W-9 and COI capture, and third-party KYC with liveness. Onboard in minutes, then keep watching authority and insurance after booking.',
};

export default function Load() {
  return (
    < CarrierOnboarding/>
  );
}