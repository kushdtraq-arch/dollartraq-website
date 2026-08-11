import { Metadata } from "next";
import Tracker from "@/pages/Tracker";

export const metadata: Metadata = {
  title: 'Tracker: AI Check Calls & Load Visibility | Dollar Traq',
  description: 'ELD fusion, late-risk prediction and drafted check-calls. Tracker flags a slipping ETA hours early and pushes 214-shaped updates to the customer\'s TMS.',
};

export default function Solution() {
  return (
    < Tracker/>
  );
}