
import React from "react";
import SplitBanner from "@/components/sections/SplitBanner";
import ContactForm from "@/components/common/forms/ContactForm";
export default function Demo() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">

        <SplitBanner
            eyebrow="Demo"
            title="Request a personalized demo"
            description="As the first and most trusted supply chain visibility platform, we have an unmatched global carrier network."
            imageSrc="/images/truck.png"
            imageAlt="Truck driving through a city at night"
            imagePosition="right"
            backgroundColor="#2f4bf0"
        />
        <ContactForm
            heading="Schedule a Demo"
            subtext="Fill out the form to speak with a supply chain expert."

        />

        </main>
    );
}