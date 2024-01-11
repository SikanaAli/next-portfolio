import React, { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import SkillItem from "./SkillItem";

import { skillsData } from "@/utils/data";

const Skills = () => {
	return (
		<div className="w-full flex justify-center h-screen z-50 backdrop-blur-sm relative" id="skills">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center z-50 h-full text-white dark:text-black">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-8 dark:text-white text-black">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillsData.map((item, index) => {
						return (
							<SkillItem
								key={index}
								imgLocation={item.imgLocation}
								name={item.name}
								invertbg={item.invertbg}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
