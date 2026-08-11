import { Metadata } from "next";
import ProductVet from "@/pages/ProductVet";

export const metadata: Metadata = {
  title: 'Carrier Vetting Software & Trust Score | Dollar Traq',
  description: 'Vet any MC number in seconds against 22.7M owned FMCSA rows. Exposure-normalized Trust Score with confidence caps and every input shown — no black-box score.',
};

export default function Solution() {
  return (
    < ProductVet/>
  );
}