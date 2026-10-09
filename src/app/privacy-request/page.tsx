import { Metadata } from "next";
import PrivacyRequest from "@/pages/PrivacyRequest";

export const metadata: Metadata = {
  title: 'Data Processing Addendum (DPA) | Dollar Traq',
  description: 'Dollar Traqs Data Processing Addendum: service-provider commitments, CCPA certifications, subprocessor terms, security measures, breach notification, and international transfers.',
};

export default function Privacy() {
  return (
    < PrivacyRequest/>
  );
}