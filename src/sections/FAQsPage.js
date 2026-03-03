"use client"
import React from 'react'
import VideoHeroSection from '@/components/common/Front'
import FAQSection  from '@/components/common/FAQsSection'

const faqItems = [
  {
	question: "What is DollarTraq and what services do you provide?",
	answer:
	  `DollarTraq is a real-time freight visibility and shipment monitoring platform designed for shippers, carriers, brokers, and logistics providers. We help businesses track shipments live, reduce delays, automate tracking updates, and improve overall supply chain performance through data-driven insights.`,
  },
  {
	question: "How does DollarTraq track shipments in real time?",
	answer:
	  `DollarTraq integrates with GPS devices, ELD systems, carrier APIs, and mobile tracking technologies to provide accurate, real-time location updates. Our system continuously analyzes movement data to deliver precise ETAs and proactive delay alerts.`,
  },
  {
	question: "Who can use DollarTraq?",
	answer:
	  `<p>DollarTraq is built for:</p><ul><li>Freight brokers</li><li>3PL providers</li><li>Shippers & manufacturers</li><li>Transportation companies</li><li>Supply chain managers</li></ul><p>Any organization that requires shipment visibility and performance optimization can benefit from our platform.</p>`,
  },
  {
	question: "How does DollarTraq improve on-time delivery performance?",
	answer:
	  `By combining real-time tracking with predictive analytics, DollarTraq identifies potential delays before they impact delivery schedules. Automated alerts and smart ETA forecasting allow teams to take proactive action and improve on-time delivery rates.`,
  },
  {
	question: "Is DollarTraq suitable for small and mid-sized logistics companies?",
	answer:
	  `Yes. DollarTraq is designed to scale. Whether you're managing a small fleet or thousands of shipments per day, our flexible platform adapts to your operational needs.`,
  },
  {
	question: "How secure is the data on DollarTraq?",
	answer:
	  `We follow industry-standard data encryption protocols and secure API integrations to ensure shipment and customer data remains protected. Data privacy and system reliability are core priorities of our technology infrastructure.`,
  },
  {
	question: "Does DollarTraq integrate with TMS or other logistics software?",
	answer:
	  `Yes. DollarTraq supports integration with most Transportation Management Systems (TMS), ERP platforms, and third-party logistics tools through API connectivity, enabling seamless data exchange and automation.`,
  },
  {
	question: "How does DollarTraq reduce manual check calls?",
	answer:
	  `DollarTraq automates shipment status updates through live tracking and smart notifications. This significantly reduces the need for manual follow-ups, saving operational time and lowering labor costs.`,
  },
  {
	question: "Can DollarTraq provide predictive ETAs?",
	answer:
	  `Yes. Our advanced analytics engine calculates dynamic Estimated Time of Arrival (ETA) using real-time traffic data, route analysis, weather inputs, and historical transit patterns.`,
  },
  {
	question: "What makes DollarTraq different from other freight visibility platforms?",
	answer:
	  `<p>DollarTraq focuses on:</p><ul><li>High tracking accuracy</li><li>Easy carrier onboarding</li><li>Automated workflows</li><li>Actionable analytics dashboards</li><li>Dedicated customer support</li></ul><p>Our platform is built to deliver measurable improvements in supply chain efficiency.</p>`,
  },
  {
	question: "How quickly can we onboard to DollarTraq?",
	answer:
	  `Most clients can be onboarded within a few days depending on integration complexity. Our implementation team provides step-by-step guidance to ensure smooth deployment with minimal disruption.`,
  },
  {
	question: "Does DollarTraq offer customer support?",
	answer:
	  `Yes. DollarTraq provides dedicated support teams, onboarding assistance, and technical guidance to ensure customers maximize platform value and performance.`,
  },
  {
	question: "Can DollarTraq help reduce detention and dwell time?",
	answer:
	  `Yes. By offering live location data and real-time arrival updates, DollarTraq enables better dock scheduling and proactive coordination, helping reduce detention fees and dwell time.`,
  },
  {
	question: "Does DollarTraq provide analytics and reporting?",
	answer:
	  `Absolutely. The platform includes performance dashboards and detailed reports on carrier performance, transit times, delay patterns, and delivery accuracy to support data-driven decision making.`,
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
