"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContentBlock from "@/components/common/ContentBlock";
import Accordion from "@/components/common/Accordion";

function CareersPage() {
	const [selectedDepartment, setSelectedDepartment] =
		useState("All Departments");
	const [openAccordion, setOpenAccordion] = useState(null);

	const handleDepartmentChange = (e) => {
		const value = e.target.value;
		setSelectedDepartment(value);

		if (value === "Contractor" || value === "Operation") {
			setOpenAccordion(value);
		} else {
			setOpenAccordion(null);
		}
	};

	return (
		<div>
			<section className="bg-sky-50 py-16">
				<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 items-center">
					<div className="flex-1">
						<ContentBlock
							headingLines={["Reach New", " Heights"]}
							description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem et, adipisci blanditiis rerum voluptates vel accusamus quia explicabo aliquam animi deleniti a? Distinctio doloribus neque ratione molestiae nulla rem!
                             Dolores, voluptatum architecto modi dolor doloremque excepturi, eos laborum autem dolorem fugit dignissimos minima ratione magni atque earum ex itaque aliquid animi id libero natus vero pariatur! Nobis, nam dolorum!
                            Magnam necessitatibus, labore quasi quisquam maxime, tempore enim numquam voluptas vitae deleniti eos, excepturi perspiciatis harum nam repudiandae`}
							
							align="left"
							spacingBottom="mb-8"
							headingColorClass="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
							descriptionColorClass="mt-6 text-lg md:text-base text-gray-700 leading-relaxed"
						/>
					</div>

					<div className="flex-1 flex justify-center md:justify-end">
						<img
							src="/images/carrer3.webp"
							alt="Person riding e-scooter"
							className="rounded-xl object-cover w-full max-w-md md:max-w-lg"
						/>
					</div>
				</div>
			</section>

			<section className="w-full bg-white py-16 px-6 flex justify-center">
				<div className="w-full max-w-[1160px] flex flex-col md:flex-row items-start gap-10 md:gap-x-20">
					<div className="flex-1 relative md:w-auto">
						<img
							src="/images/carrer1-min.webp"
							alt="Logistics container"
							className="rounded-xl shadow-lg w-full max-w-md md:max-w-xl h-[470px] object-cover "
						/>
					</div>

					<div className="flex-1 mt-10 md:mt-0">
						<ContentBlock
							headingLines={["Know Your Perks"]}
							description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias excepturi, assumenda fugit impedit voluptatum ex eligendi cumque! Ut minima, iste quisquam libero temporibus facilis ipsum minus necessitatibus quod eum?
                            Ipsa quod cupiditate rem officia tempore odio, tenetur, architecto quisquam ex debitis minus dolor fugiat saepe eligendi quidem nemo sapiente omnis illum odit praesentium! Itaque, minima ipsam? Consequuntur, quae perferendis..`}
							align="left"
							spacingTop="mt-0"
							spacingBottom="mb-6"
							headingColorClass="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
							descriptionColorClass="mt-6 text-base md:text-lg text-gray-700 leading-relaxed"
						/>
					</div>
				</div>
			</section>

			<section className="w-full bg-sky-50 py-16 flex flex-col items-center px-6 sm:px-12">
				<div className="max-w-4xl w-full">
					<ContentBlock
						headingLines={["Join The Flock"]}
						description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate asperiores harum doloribus natus cum molestiae aut officiis. Iste saepe quos rerum eius dolore! Voluptatem modi, soluta assumenda dignissimos expedita recusandae.
                         Corrupti inventore assumenda deleniti voluptatem quidem deserunt, iste temporibus aut atque, tempore necessitatibus suscipit aspernatur consectetur delectus iusto asperiores blanditiis? Magni velit est natus cupiditate nihil. Illum veniam voluptatem accusantium!`}
						align="center"
						spacingTop="mt-6"
						spacingBottom="mb-8"
						headingColorClass="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
						descriptionColorClass="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed"
					/>
				</div>
			</section>

			<div className="max-w-4xl mx-auto px-6 py-16">
				<h1 className="text-4xl font-bold text-gray-900 mb-8">
					How we interview at Dollar Traq
				</h1>

				<Accordion title="You apply" defaultOpen={true}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus labore molestias sed eligendi, earum illo
						molestiae maiores rem! Dicta reprehenderit iusto est nam
						blanditiis animi modi veritatis sapiente ab suscipit!
					</p>
					<p className="mt-4">
						Are you currently not eligible for the position or is a
						desired opportunity not listed? Then make sure to follow
						our company’s{" "}
						<a
							href="#"
							className="text-sky-600 hover:underline font-medium"
						>
							LinkedIn
						</a>{" "}
						page, so that you stay informed of suitable vacancies!
					</p>
				</Accordion>

				<Accordion title="The first contact">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Obcaecati voluptatem minus delectus nostrum qui, animi
						aliquam! Ducimus, odit provident, a sed rerum et
						corporis sunt nesciunt adipisci, pariatur deserunt cum?.
					</p>
				</Accordion>

				<Accordion title="The second conversation">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Accusamus aliquid quisquam mollitia rerum harum
						maiores obcaecati eveniet possimus nobis dolores
						deleniti tenetur pariatur, eligendi, laboriosam ex nihil
						maxime sit illum?
					</p>
				</Accordion>

				<Accordion title="Assignment (if any)">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Illo veritatis optio eaque, vero vitae autem est
						dolor quia sit perspiciatis hic magnam rerum unde nam
						odit laboriosam quaerat cum tempora?
					</p>
				</Accordion>

				<Accordion title="Final interview(s)">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Illo veritatis optio eaque, vero vitae autem est
						dolor quia sit perspiciatis hic magnam rerum unde nam
						odit laboriosam quaerat cum tempora?
					</p>
				</Accordion>

				<Accordion title="Offer">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Illo veritatis optio eaque, vero vitae autem est
						dolor quia sit perspiciatis hic magnam rerum unde nam
						odit laboriosam quaerat cum tempora?
					</p>
				</Accordion>
			</div>

			<div className="max-w-4xl mx-auto text-center px-6 py-12">
				<p className="text-xl md:text-2xl font-medium text-sky-900 leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
					quibusdam consequuntur vitae quo tenetur modi, voluptate id
					totam, officiis pariatur quae velit eveniet ea earum,
					numquam quos vero obcaecati ex.
				</p>
				<p className="mt-4 text-sky-900 font-normal">
					Olivia, City Growth & Strategy Team
				</p>
			</div>
		</div>
	);
}

export default CareersPage;
