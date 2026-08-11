import { Metadata } from "next";
import ProductIntegration from "@/pages/ProductIntegration";

export const metadata: Metadata = {
  title: 'TMS, ELD & Load Board Integrations | Dollar Traq',
  description: 'Connect your TMS, ELD providers, DAT and broker mailboxes. Dollar Traq runs alongside the stack you already have instead of asking you to rip it out.',
};

export default function Solution() {
  return (
    < ProductIntegration/>
  );
}