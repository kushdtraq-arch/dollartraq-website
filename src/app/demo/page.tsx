
import { Metadata } from "next";
import Demo from "@/pages/Demo";

export const metadata: Metadata = {
  title: 'Book a Demo: Vet Five MC Numbers Live | Dollar Traq',
  description: 'Twenty-five minutes. Bring five MC numbers and we vet them on the call — authority, insurance, Trust Score, fraud signals. You keep the report either way.',
};

export default function ComparePage() {
  return (
    <Demo />
  );
}