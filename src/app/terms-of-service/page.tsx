import { Metadata } from "next";
import TermsOfService from "@/pages/TermsOfServices";

export const metadata: Metadata = {
  title: 'Terms of Service | Dollar Traq',
  description: 'The terms governing use of Dollar Traq software, DT Pay conditional payment release and related services for freight brokers, 3PLs, shippers and carriers.',
};

export default function Privacy() {
  return (
    < TermsOfService/>
  );
}