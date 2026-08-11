import { Metadata } from "next";
import AiAgentsPage from "@/pages/AiAgents";

export const metadata: Metadata = {
  title: 'AI Agents for Freight Brokers | Dollar Traq',
  description: 'Sentinel vets, Rate quotes, Tracker follows, Vault reads paper, Fleetra orchestrates. Five agents on owned FMCSA data, human approval before anything sends.',
};

export default function Solution() {
  return (
    < AiAgentsPage/>
  );
}