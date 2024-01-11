"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContacts } from "react-icons/md";
import Link from "next/link";

function Navbar() {
	const [IsMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 768px)");

		if (mq.matches) {
			setIsMobile(true);
		}

		// This callback will fire if the perferred min-width changes without a reload
		mq.addEventListener("change", (evt) => setIsMobile(evt.matches));
	}, []);

	return (
		// ? none Mobile NaveBar

		<div
			className={
				IsMobile
					? "z-[100] h-screen  fixed flex flex-col  justify-center  ml-4"
					: "z-[100] fixed bottom-3 w-screen flex justify-center items-center"}
					
		>
			<div
				className={
					IsMobile
                    ? "flex flex-col justify-center items-center gap-8 max-h-[480px] border border-ali-blue backdrop-blur-[2px] rounded-full px-5 py-6"
                    : "border border-ali-blue rounded-full p-3  gap-8 backdrop-blur-[2px] cursor-pointer ease-in duration-300 flex flex-row py-5 px-6"
				}
			>
				<Link href="#hero" className="hover:scale-150 hover:text-green-700 p-1 transition duration-500">
					<AiOutlineHome size={30} />
				</Link>
				<Link href="#about" className="hover:scale-150 hover:text-green-700 p-1 transition duration-500">
					<SiAboutdotme size={30} />
				</Link>
				<Link href="#skills" className="hover:scale-150 hover:text-green-700 p-1 transition duration-500">
					<GiSkills size={30} />
				</Link>
				<span className="hover:scale-150 hover:text-green-700 p-1 transition duration-500">
					<MdOutlineContacts size={30} />
				</span>
			</div>
		</div>
	);
}

export default Navbar;
