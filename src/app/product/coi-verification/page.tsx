import { Metadata } from "next";
import CoiVerification from "@/pages/CoiVerification";

export const metadata: Metadata = {
  title: 'AI Certificate of Insurance (COI) Verification | Dollar Traq',
  description: '350,000+ COIs on file, AI-read and holder-verified against your requirements. Limits, expirations and cancellations checked automatically, never re-keyed.',
};

export default function Coi() {
  return (
    < CoiVerification/>
  );
}