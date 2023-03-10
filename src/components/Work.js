import React from "react";
import Fooddeliveryexample from "../assets/Fooddeliveryexample.png";
import EcohubExample from "../assets/ecohub-example.png";
import VehicleManagementExample from '../assets/Vehicle Management Example.png';

import "./Work.css";

const ownProjects = [
	{
		name: "Food Delivery",
		img_link: Fooddeliveryexample,
		git_link: "https://github.com/viwinkumarpadala/FOOD-DELIVERY-APP/tree/master",
		display_link: "https://guileless-lamington-bb8aa6.netlify.app/",
	},
	{
		name: "Ecohub",
		img_link: EcohubExample,
		git_link: "https://github.com/viwinkumarpadala/ecohub/tree/master",
		display_link: "https://github.com/viwinkumarpadala/ecohub/tree/master",
	},
	{
		name: "Command Line Vehicle Management System",
		img_link: VehicleManagementExample,
		git_link: "https://github.com/viwinkumarpadala/vehicle-management/tree/master",
		display_link: "https://github.com/viwinkumarpadala/vehicle-management/tree/master",
	},
];


const allProjects = ownProjects.map((project) => {
	return (
		<div class="flex justify-center">
			<figure class="snip1193">
				<img src={project.img_link} alt="sample31" />
				<figcaption>
					<div>
						<h4 className="opacity-100">{project.name}</h4>
					</div>
					<a
						href={project.git_link}
						class="bottom-left"
						target="__blank">
						<i class="ion-social-github"></i>
					</a>
					<a
						href={project.display_link}
						class="bottom-right"
						target="__blank">
						<i class="ion-android-bulb"></i>
					</a>
				</figcaption>
			</figure>
		</div>
	);
});


const Work = () => {
	return (
		<div className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
		name="work" id="work">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<p className="text-4xl font-bold inline border-b-4 border-pink-600">
					Work.
				</p>
				<p className="pt-8">Checkout some of my previous work.</p>{" "}
				<br></br>
				<div class="container mx-auto">
					<div class="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
						{allProjects}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
