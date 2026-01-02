"use client";

import { useForm } from "react-hook-form";

export default function ContactForm({ fields = [], buttonLabel = "Submit", onSubmit }) {
  const {
	register,
	handleSubmit,
	formState: { errors },
	reset,
  } = useForm();

  const handleFormSubmit = (data) => {
	if (onSubmit) onSubmit(data);
	else {
	  console.log("Form submitted:", data);
	  alert("Form submitted successfully!");
	}
	reset();
  };

  return (
	<section className="w-full flex justify-center items-center py-12 px-4 ">
	  <div className="w-full max-w-4xl bg-gray-100 rounded-2xl shadow-sm p-8 md:p-10">
	  
		<form
		  onSubmit={handleSubmit(handleFormSubmit)}
		  className="grid grid-cols-1 md:grid-cols-2 gap-6"
		>
		  {fields.map((field) => {
			const commonProps = {
			  ...register(field.name, field.validation),
			};

			switch (field.type) {
			  case "textarea":
				return (
				  <div
					key={field.name}
					className={field.fullWidth ? "md:col-span-2" : ""}
				  >
					<Label text={field.label} />
					<textarea
					  rows={field.rows || 4}
					  placeholder={field.placeholder || ""}
					  {...commonProps}
					  className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
					/>
					{errors[field.name] && <Error message={errors[field.name].message} />}
				  </div>
				);

			  case "select":
				return (
				  <div
					key={field.name}
					className={field.fullWidth ? "md:col-span-2" : ""}
				  >
					<Label text={field.label} />
					<select
					  {...commonProps}
					  className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
					>
					  <option value="">Select...</option>
					  {field.options?.map((opt, i) => (
						<option key={i} value={opt}>
						  {opt}
						</option>
					  ))}
					</select>
					{errors[field.name] && <Error message={errors[field.name].message} />}
				  </div>
				);

			  case "checkbox":
				return (
				  <div
					key={field.name}
					className={`md:col-span-2 flex items-start space-x-2 ${field.className || ""}`}
				  >
					<input
					  type="checkbox"
					  {...commonProps}
					  className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
					/>
					<label className="text-sm text-gray-600">{field.label}</label>
				  </div>
				);

			  default:
				return (
				  <div key={field.name} className={field.fullWidth ? "md:col-span-2" : ""}>
					<Label text={field.label} />
					<input
					  type={field.type || "text"}
					  placeholder={field.placeholder || ""}
					  {...commonProps}
					  className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
					/>
					{errors[field.name] && <Error message={errors[field.name].message} />}
				  </div>
				);
			}
		  })}

	   
		  <div className="md:col-span-2 flex justify-start">
			<button
			  type="submit"
			  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition-all"
			>
			  {buttonLabel}
			</button>
		  </div>
		</form>
	  </div>
	</section>
  );
}


const Label = ({ text }) => (
  <label className="block text-sm font-medium text-gray-700 mb-1">{text}</label>
);

const Error = ({ message }) => (
  <p className="text-red-500 text-xs mt-1">{message}</p>
);
