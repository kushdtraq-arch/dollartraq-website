"use client";
import React, { useState } from "react";
import VideoHeroSection from "@/components/common/Front";
import ContactForm from "@/components/common/ContactForm";

import { useRouter } from 'next/navigation'

import Api from "@/api/Api";

export default function ContactPage() {
	
	const router = useRouter()

	const [error_message, setErrorMessage] = useState('')
	const [country_code, setCountryCode] = useState('')
	const [submitting, setSubmitting] = useState(false)

  	const demoFields = [
		{ label: "First Name", name: "first_name", validation: { required: "First Name is required" } },
		{ label: "Last Name", name: "last_name", validation: { required: "Last Name is required" } },
		{ label: "Email", name: "email", type: "email", validation: { required: "Email is required" } },
		{ label: "Phone", name: "contact", type: 'number', validation: { required: "Contact is required", } },
		{ label: "Job Title", name: "job_title" },
		{ label: "Company", name: "company" },
		{
			label: "Country",
			name: "country",
			type: "select",
			options: ["India", "USA", "UK", "Canada"],
			validation: { required: "Country is required" },
		},
		{
			label: "Business Type",
			name: "business_type",
			type: "select",
			options: ["Shipper", "3PL", "Freight Broker"],
		},
		{
			label: "Please select features of interest:",
			name: "interest",
			type: "select",
			options: ["Tracking", "Analytics", "Automation"],
		},
		{
			label: "How did you hear about us?",
			name: "source",
			type: "select",
			options: ["Google", "LinkedIn", "Referral", "Other"],
		},
		{
	  		label: "Please tell us about your company and the type of solution you would like to discuss:",
			name: "message",
			type: "textarea",
			rows: 4,
			fullWidth: true,
			validation: { required: "Message is required" },
		},
		{
			label: "Subscribe to email updates. Opt out at any time.",
			name: "subscribe",
			type: "checkbox",
			fullWidth: true,
		},
  	];

  	const handleDemoSubmit = (data) => {
		
		setSubmitting(true)
		let formData = new FormData();

		formData.append('c_code', country_code)
		formData.append('query_page', 'contact')

		for(let field in data){

			if(field == 'subscribe' && data[field] === true){

				formData.append(field, 1)
			}else{

				formData.append(field, data[field])
			}
		}

        let that = this;

        Api.post('contact/query/save', formData, function(data){
            
            if(data.status){
                
                router.push('/demo/success')
            }
        });
  	}

  return (
	<>
	  <VideoHeroSection
		variant="split"
		imageSrc="/images/contact4.webp"
		useVideo={false}
		headerLabel="Contact Us"
		headerLineWidth={40}
		headerLineColor="white"
		headerLineOpacity={0.8}
		titleLines={["Let's Move Your", " Business Forward"]}
		subtitle="As the first and most trusted supply chain visibility platform, we have an unmatched global carrier network."
		companyLogos={[
		  { src: "/impossible.png", alt: "Impossible" },
		  { src: "/chrobinson.png", alt: "C.H. Robinson" },
		  { src: "/tql.png", alt: "TQL" },
		  { src: "/hormel.png", alt: "Hormel" },
		  { src: "/echo.png", alt: "Echo" },
		  { src: "/toyota.png", alt: "Toyota" },
		  { src: "/coyote.png", alt: "Coyote" },
		]}
		companySectionText="Helping 100+ leading companies get better results"
	  />
	  <hr className="border-gray-300 my-10" />
		<div className="max-w-4xl mx-auto px-4">
		
		<div className="text-center mb-6">
		  <h2 className="text-3xl font-bold">How can we help you ?</h2>
		  <p className="text-gray-600 mt-2">
			Please submit your request below. If calling, dial ​888-544-3844 for North America, or +31 33 460 63 00 for Europe.
		  </p>
		</div>

		<ContactForm
		  	fields={demoFields}
		  	buttonLabel="Send Request"
		  	onSubmit={handleDemoSubmit}
		  	submitting={submitting}
			setCountryCode={(code) => {

				setCountryCode(code)
			}}
		/>
	  </div>
	</>
  );
}
