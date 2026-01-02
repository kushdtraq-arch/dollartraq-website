"use client"
import React from 'react'
import VideoHeroSection from '@/components/common/Front'
import FAQSection  from '@/components/common/FAQsSection'

const faqItems = [
  {
	question: "Who is Descartes MacroPoint and what do you do?",
	answer:
	  "Descartes MacroPoint is a global freight visibility platform that helps shippers, carriers, and logistics service providers track shipments in real-time, automate processes, and improve supply chain efficiency.",
  },
  {
	question: "How does MacroPoint improve delivery performance?",
	answer:
	  "By using real-time visibility and predictive analytics, MacroPoint helps you proactively manage delays, improving on-time delivery rates.",
  },
  {
	question: "Who is Descartes MacroPoint and what do you do?",
	answer:
	  "Descartes MacroPoint is a global freight visibility platform that helps shippers, carriers, and logistics service providers track shipments in real-time, automate processes, and improve supply chain efficiency.",
  },
  {
	question: "How does MacroPoint improve delivery performance?",
	answer:
	  "By using real-time visibility and predictive analytics, MacroPoint helps you proactively manage delays, improving on-time delivery rates.",
  },
  {
	question: "Who is Descartes MacroPoint and what do you do?",
	answer:
	  "Descartes MacroPoint is a global freight visibility platform that helps shippers, carriers, and logistics service providers track shipments in real-time, automate processes, and improve supply chain efficiency.",
  },
  {
	question: "How does MacroPoint improve delivery performance?",
	answer:
	  "By using real-time visibility and predictive analytics, MacroPoint helps you proactively manage delays, improving on-time delivery rates.",
  },
  {
	question: "Who is Descartes MacroPoint and what do you do?",
	answer:
	  "Descartes MacroPoint is a global freight visibility platform that helps shippers, carriers, and logistics service providers track shipments in real-time, automate processes, and improve supply chain efficiency.",
  },
  {
	question: "How does MacroPoint improve delivery performance?",
	answer:
	  "By using real-time visibility and predictive analytics, MacroPoint helps you proactively manage delays, improving on-time delivery rates.",
  },
];

function FAQsPage() {
  return (
	<div>
	   <VideoHeroSection
		variant="split"
		imageSrc="/images/FAQ.webp"
		useVideo={false}
		headerLabel="FAQs"
		headerLineWidth={40}
		headerLineColor="white"
		headerLineOpacity={0.8}
		titleLines={["Quick Answers to"," Common Queries"]}
		subtitle="As the first and most trusted supply chain visibility platform, we have an unmatched global carrier network."
		buttons={[]}
	  />
	   <FAQSection
		title="General Questions"
		subtitle="Streamlined processes, real-time tracking, and reliable delivery designed to keep your business moving forward."
		faqItems={faqItems}
	  />
	</div>
  )
}

export default FAQsPage
