import { Metadata } from 'next';
import ProductVet from "@/pages/ProductVet";

export const metadata: Metadata = {
  title: 'Freight Broker Software: Vet, Track & Pay | Dollar Traq',
  description: 'One platform for carrier vetting, fraud prevention, COI verification, load tracking and conditional payment release — built on FMCSA data we host ourselves.',
};

export default function Solution() {
  return (
    < ProductVet/>
  );
}