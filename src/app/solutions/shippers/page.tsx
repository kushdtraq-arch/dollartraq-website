import { Metadata } from "next";
import Shipper from "@/pages/Shipper";

export const metadata: Metadata = {
  title: 'Carrier Vetting & Visibility for Shippers | Dollar Traq',
  description: 'Know exactly who touches your freight. Verify the carrier behind every broker tender, watch authority and insurance changes, and see the proof of delivery.',
};

export default function Shippers() {
  return (
    < Shipper/>
  );
}