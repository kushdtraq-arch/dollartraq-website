import { Metadata } from "next";
import Rate from "@/pages/Rate";

export const metadata: Metadata = {
  title: 'Rate: AI Freight Quoting & Pricing Agent | Dollar Traq',
  description: 'Quote from the inbox in seconds. Tenant-siloed rate memory, DAT benchmarks under your license and 2.1-sigma anomaly flags, so reps counter with lane history.',
};

export default function Solution() {
  return (
    < Rate/>
  );
}