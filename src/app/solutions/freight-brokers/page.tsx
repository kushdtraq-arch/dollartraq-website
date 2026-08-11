import { Metadata } from "next";
import FreightBroker from "@/pages/FreightBroker";

export const metadata: Metadata = {
  title: 'Freight Broker Software for Vetting & Payments | Dollar Traq',
  description: 'Replace four vetting, insurance, tracking and payment tools with one system. Owned FMCSA data, Trust Score and DT Pay from first vet to final payment.',
};

export default function Freight() {
  return (
    < FreightBroker/>
  );
}