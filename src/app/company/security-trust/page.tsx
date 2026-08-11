import { Metadata } from "next";
import SecurityAndTrust from "@/pages/SecurityAndTrust";

export const metadata: Metadata = {
  title: 'Security, Trust & Data Ownership | Dollar Traq',
  description: 'SOC 2 attestation in progress, tenant-siloed rate memory, role-based answers and a replayable audit trail. Approval is a node in the graph, not a setting.',
};

export default function ComparePage() {
  return (
    <SecurityAndTrust />
  );
}