import { Metadata } from "next";
import PlForwards from "@/pages/3pl";

export const metadata: Metadata = {
  title: 'Carrier Compliance for 3PLs & Forwarders | Dollar Traq',
  description: 'Enforce one carrier standard across every desk and branch. Role-based answers, replayable audit trails and monitoring that scales as you add headcount.',
};

export default function Pl() {
  return (
    < PlForwards/>
  );
}