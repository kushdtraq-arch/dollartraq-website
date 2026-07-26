
import React from "react";
import SplitBanner from "@/components/sections/SplitBanner";
import ContactForm from "@/components/common/forms/ContactForm";
export default function Contact() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">

        <SplitBanner
            eyebrow="Contact Us"
            title="Let's Move Your Business Forward"
            description="As the first and most trusted supply chain visibility platform, we have an unmatched global carrier network."
            imageSrc="/images/truck.png"
            imageAlt="Truck driving through a city at night"
            imagePosition="right"
            backgroundColor="#2f4bf0"
        />
        <ContactForm

        />

        </main>
    );
}