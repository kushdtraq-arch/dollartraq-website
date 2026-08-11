import { Metadata } from "next";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: 'Privacy Policy | Dollar Traq',
  description: 'How Dollar Traq collects, stores and processes carrier, broker and payment data, including tenant isolation, retention periods and your rights over that data.',
};

export default function Privacy() {
  return (
    < PrivacyPolicy/>
  );
}