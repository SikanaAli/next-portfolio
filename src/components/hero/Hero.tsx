"use client";
import Link from "next/link";
import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroPatern from "./HeroPatern";

function Hero() {
	return (
		<div className="w-full h-screen text-center relative overflow-x-hidden">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center z-100">
				<div className="backdrop-blur-[2px] z-50 bg-blend-overlay p-5">
					<p className="uppercase text-sm tracking-widest">
						let&apos;s build something together
					</p>
					<h1 className="py-4 text-black dark:text-white">
						Hi, I&apos;m{" "}
						<span className="text-[#5651e5]">Alinaswe</span>
					</h1>
					<h1 className="py-2 text-black dark:text-white">
						A Software Engineer
					</h1>
					<p className="py-4 text-[#5651e5] max-w-[70%] m-auto">
						Requirements Engineer, Internet of Things (IoT)
						Enthusiast, Back-End Developer, Front-End Developer
					</p>
					<div className="flex z-10 items-center justify-between max-w-[330px] m-auto py-4">
						<Link
							className="z-10 hover:mix-blend-normal rounded-full shadow-lg hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={
								"https://www.linkedin.com/in/alinaswe-sikana/"
							}
						>
							<FaLinkedin />
						</Link>
						<Link
							className="z-10 hover:mix-blend-normal rounded-full shadow-lg hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"https://github.com/SikanaAli"}
						>
							<FaGithub />
						</Link>
						<Link
							className="z-10 hover:mix-blend-normal rounded-full shadow-lg hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"mailto:sikanaalinaswe@gmail.com"}
						>
							<AiOutlineMail />
						</Link>
						<Link
							className="z-10 hover:mix-blend-normal rounded-full shadow-lg hover:shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
							href={"https://wa.me/260771231901"}
						>
							<BsWhatsapp />
						</Link>
					</div>
				</div>
			</div>
			<HeroPatern />
		</div>
	);
}

export default Hero;
