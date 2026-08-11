import { Metadata } from "next";
import Vault from "@/pages/Vault";

export const metadata: Metadata = {
  title: 'Vault: AI Document & Order Entry Agent | Dollar Traq',
  description: 'Every COI, rate confirmation, BOL and POD classified, extracted, confidence-scored and filed — turning inbox paper into facts the other four agents can use.',
};

export default function Solution() {
  return (
    < Vault/>
  );
}