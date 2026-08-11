import { Metadata } from "next";
import LoadTracking from "@/pages/LoadTracking";

export const metadata: Metadata = {
  title: 'Freight Load Tracking with ELD Fusion | Dollar Traq',
  description: 'Track every load through ELD, mobile and geofence data. Late-risk prediction, drafted check-calls and 214-shaped webhooks into your customer\'s TMS.',
};

export default function Load() {
  return (
    < LoadTracking/>
  );
}