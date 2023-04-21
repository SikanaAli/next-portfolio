import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function About() {
	return (
		<div
			id="about"
			className="w-full md:h-screen p-2 relative flex items-center py-16 bg-[#E4DFFC] "
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						{"// I am not you regular developer"}
					</p>
					<p className="py-2 text-gray-600">
						Growing up I had always enjoyed playing videogames; the
						more I played the more I wanted to know how the very
						games I played where made. While pursuing my Diploma in
						IT an opportunity arose in which I had decide what my
						Final Year Project would be. I proceeded to develop a
						game using Unity Game Engine alongside the Thesis (late
						2016).
					</p>
					<p className="py-2 text-gray-600">
						Following the success of my Diploma Project, I pursued a
						Degree in Software Engineering. Which saw me produce an
						Internet of Things (IoT) project for my thesis. Shortly
						after, I found a 5-month internship opportunity with
						Custommedia Snd Bhd Malaysia (Feb, 2019). In the 5
						months there, my knowledge of C-Sharp and other
						technologies grew which then helped me get employed as
						an Analyst Programmer by said company till late 2021.
						Fascinated with the intricacies of programming and
						software engineering, I was quickly drawn to learn more.
						In addition to C-Sharp, I started learning JavaScript
						for Web, CircuitPython for Micro-Controllers as well as
						Postgres-SQL along side MSSQL.
					</p>
					<p className="py-2 text-gray-600">
						I now spend my time Building projects with NextJS,
						Superbase and learning new technologies
					</p>
					<a href="#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							check out some of my latest projects
						</p>
					</a>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img
						className="rounded-xl"
						src="/assets/profile_img.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
