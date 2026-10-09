import { Metadata } from "next";

import Subprocessors from "@/pages/SubProcessors";

export const metadata: Metadata = {
  title: 'Subprocessors | Dollar Traq',
  description: "Current list of subprocessors and affiliates Dollar Traq uses to provide its freight broker platform — purposes, data categories, locations, and how to get change notifications.",
};

export default function Privacy() {
  return (
    < Subprocessors/>
  );
}