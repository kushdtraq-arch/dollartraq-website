import { Metadata } from "next";
import Carrier from "@/pages/Carrier";

export const metadata: Metadata = {
  title: 'Carrier Onboarding & Fast Payment | Dollar Traq',
  description: 'Onboard once, get paid in ~90 seconds on verified delivery via Stripe Express. KYC and CDL capture in the driver app — no repeat paperwork for every broker.',
};

export default function Carriers() {
  return (
    < Carrier/>
  );
}