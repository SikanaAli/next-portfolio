import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function About() {
	return (
		<div
			id="about"
			className="w-full md:h-screen p-2 flex items-center py-16"
		>
			<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
				<svg
					class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
				>
					<path
						fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
						fill-opacity=".8"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#9089FC" />
							<stop offset="1" stop-color="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>

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
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
				<svg
					class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
				>
					<path
						fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
						fill-opacity=".8"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#9089FC" />
							<stop offset="1" stop-color="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
}
