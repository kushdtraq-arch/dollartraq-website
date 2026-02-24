"use client";
import React, { useState } from "react";
import ContactForm from "@/components/common/ContactForm";

import Link from "next/link";

import { useRouter } from 'next/navigation'

import { X, Check, ChevronRight} from "lucide-react";

import Api from "@/api/Api";

export default function SignUpPage() {
	
	const [error_message, setErrorMessage] = useState('')
	const [success_message, setSuccessMessage] = useState('')
	const [country_code, setCountryCode] = useState('')
	const [submitting, setSubmitting] = useState(false)

	const router = useRouter()

  	const demoFields = [
		{ label: "First Name", name: "first_name", validation: { required: "First Name is required" } },
		{ label: "Last Name", name: "last_name", validation: { required: "Last Name is required" } },
		{ label: "Email", name: "email", type: "email", validation: { required: "Email is required" } },
		{ label: "Password", name: "password", validation: { required: "Password is required", } },
		{
			label: "Country",
			name: "country",
			type: "select",
			options: ["India", "USA", "UK", "Canada"],
			validation: { required: "Country is required" },
		},
		{ label: "Phone", name: "contact", type: 'number', validation: { required: "Contact is required", } },
		
		{ label: "Company", name: "company" },
  	];

  	const handleDemoSubmit = (data) => {
		
		setSubmitting(true)
		let formData = new FormData();

		formData.append('c_code', country_code)

		for(let field in data){

			formData.append(field, data[field])
		}

        // let that = this;

        Api.post('customer/account/signup', formData, function(data){
            
            if(data.status){
                
                setSuccessMessage(true)
            }else{

				setErrorMessage(data.message)
				setSubmitting(false)
			}
        });
  	}

  	return (
		<>
			<div className="max-w-4xl mx-auto px-4 pt-9 mt-9 flex items-center justify-center flex-col">
		
				<div className="text-center mb-6">
					<h2 className="text-3xl font-bold">Create Account</h2>
					<p className="text-gray-600 mt-2">Please submit your request below.</p>
				</div>

				{error_message !== '' &&
				
					<div className="py-2 px-5 bg-red-100 rounded-lg flex items-center justify-between">
						<div>
							<p className="text-sm text-red-800">{error_message}</p>
						</div>
						<button type="button" className="w-[20] h-[20] bg-red-300 flex items-center justify-center rounded-full cursor-pointer transition hover:bg-red-400" onClick={() => {

							setErrorMessage('')
						}}>
							<X size={16} />
						</button>
					</div>
				}

				{success_message
					?
						<div className="py-8 px-5 bg-green-100 rounded-3xl flex items-center justify-between flex-col w-[500]">
							<div className="w-[100px] h-[100px] bg-green-300 mt-8 rounded-full flex items-center justify-center">
								<Check size={60} />
							</div>
							<div>
								<p className="text-lg font-bold text-green-800 mt-9 text-center">Your account has been created successfully.</p>
							</div>

							<Link href={process.env.NEXT_PUBLIC_APPLICATION_URL} className="bg-green-300 py-2 px-5 mt-5 flex items-center justify-center rounded-full cursor-pointer transition hover:bg-green-400">
								<span>Account Login</span>
								<ChevronRight />
							</Link>
						</div>
					:

						<ContactForm
							fields={demoFields}
							buttonLabel="Send Request"
							onSubmit={handleDemoSubmit}
							submitting={submitting}
							setCountryCode={(code) => {

								setCountryCode(code)
							}}
						/>
				}
			</div>
		</>
  	);
}
