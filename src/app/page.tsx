import { Metadata } from 'next';
import Homepage from "@/pages/HomePage";

export const metadata: Metadata = {
  title: 'AI Operating System for Freight Brokers | Dollar Traq',
  description: 'Five AI agents on our own 22.7M-row FMCSA database: vet carriers, price loads, track freight, read the paper, and pay on verified delivery at a flat 1.2%.',
};

export default function Home() {
  return (
    <Homepage />
  );
}