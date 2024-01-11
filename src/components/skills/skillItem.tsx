import Image from 'next/image'
import React from 'react'



const SkillItem:React.FC<Skill> = ({imgLocation,name,invertbg}:Skill) => {
  return (
		<div className="grid grid-cols-2 gap-4 px-2 justify-center items-center rounded-2xl bg-gradient-to-t from-[#5651e537] backdrop-blur-sm to-white dark:to-black">
			<div className="skillsvg">
				<img src={imgLocation} className="text-red-600" alt="skill" />
			</div>
			<div className="w-full text-right">
				<strong className="text-black dark:text-white">{name}</strong>
			</div>
		</div>
  );
}

export default SkillItem