import { Metadata } from "next";
import Compare from "@/pages/Compare";

export const metadata: Metadata = {
  title: 'Compare Dollar Traq: Vetting & AI Agent Platforms',
  description: 'How Dollar Traq stacks up against carrier-vetting tools like Highway and MyCarrierPortal, and AI agent platforms like Vooma, Augment, HappyRobot and Debales.',
};

export default function ComparePage() {
  return (
    <Compare />
  );
}