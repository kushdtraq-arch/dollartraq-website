import { Metadata } from "next";
import AboutPage from "@/pages/About";

export const metadata: Metadata = {
  title: 'About Dollar Traq: Built for the Freight Desk',
  description: 'Why we built an operating system for US freight brokers — owned FMCSA data, accountable AI agents, and a human approval gate on every consequential action.',
};

export default function Solution() {
  return (
    < AboutPage/>
  );
}