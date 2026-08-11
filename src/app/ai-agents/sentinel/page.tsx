import { Metadata } from "next";
import Sentinel from "@/pages/Sentimal";

export const metadata: Metadata = {
  title: 'Sentinel: AI Carrier Vetting & Fraud Agent | Dollar Traq',
  description: 'Sentinel answers one question: can I trust this carrier for this load, today? Vet cards, chameleon detection, and 24/7 authority and insurance watch.',
};

export default function Solution() {
  return (
    < Sentinel/>
  );
}