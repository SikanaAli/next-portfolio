"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import deserter2dImg from "../public/assets/projects/deserter2d.jpg";
import publicApisImg from "../public/assets/projects/public_apis.png";
import googleUiCloneImg from "../public/assets/projects/googleUiClone.png";
import ProjectItem from "./ProjectItem";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const projectItems = [
	<ProjectItem
		title={"Dserter 2D"}
		backgroundImg={deserter2dImg}
		projectType={"Unity"}
		projectUrl={"/dserter2d"}
	/>,
	<ProjectItem
		title={"Public Apis"}
		backgroundImg={publicApisImg}
		projectType={"NextJS"}
		projectUrl={"/publicapis"}
	/>,
	<ProjectItem
		title={"Google UI Clone"}
		backgroundImg={googleUiCloneImg}
		projectType={"HTML & CSS"}
		projectUrl={"/googleclone"}
	/>,
];

function Projects() {
	const [currentItem, setCurrentItem] = useState(0);

	const nextProjectitem = () => {
		const temp = currentItem + 1;

		if (temp > projectItems.length - 1) {
			setCurrentItem(0);
		} else {
			setCurrentItem(currentItem + 1);
		}
	};

	const previousProjectItem = () => {
		const temp = currentItem;

		if (temp < projectItems.length - 1) {
			setCurrentItem(0);
		} else {
			setCurrentItem(currentItem + 1);
		}
	};

	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className=" pt-4 pb-10">What I&apos;ve Built</h2>

				<div className="w-full ">
					<div className="flex justify-center items-center duration-500 rounded-2xl">
						{projectItems[currentItem]}
					</div>
					{/* Left Arrow */}
					<div className="absolute -top-[-345%]  -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft size={30} />
					</div>
					{/* Right Arrow */}
					<div className="absolute -top-[-345%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-2xl p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight
							size={30}
							onClick={nextProjectitem}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
