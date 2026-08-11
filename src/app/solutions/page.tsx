import { Metadata } from "next";
import SolutionPage from "@/pages/Solutions";

export const metadata: Metadata = {
  title: 'Fleetra: AI Orchestrator for the Freight Desk | Dollar Traq',
  description: 'Fleetra plans the work, fans it out to four specialist agents and merges one sourced answer — then stops at a human approval node before anything sends.',
};

export default function Solution() {
  return (
    < SolutionPage/>
  );
}