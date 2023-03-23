"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.module.css";

export default function Hero() {
	return (
		<div id="home" className="w-full h-screen text-center home">
			{/* <style jsx>
				{`
					#home {
						background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(221)'%3E%3Crect width='100%25' height='100%25' fill='rgba(240, 255, 244,1)'/%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(107, 70, 193,1)'/%3E%3Ccircle cx='30' cy='20' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='25' cy='28.66' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='15' cy='28.66' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='10' cy='20' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='15' cy='11.34' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='25' cy='11.34' r='1' fill='rgba(246, 224, 94,1)'/%3E%3Ccircle cx='30' cy='20' r='1' fill='rgba(246, 224, 94,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
					}
				`}
			</style> */}
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<svg
						class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
					>
						<path
							fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
							fill-opacity=".3"
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
				<div>
					<p className="uppercase text-sm tracking-widest">
						let&apos;s build something together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m{" "}
						<span className="text-[#5651e5]">Alinaswe</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Softaware Engineer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Requirements Engineer, Internet of Things (IoT)
						Enthusiast, Back-End Developer, Front-End Developer
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaLinkedin />
						</div>
						<div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaGithub />
						</div>
						<div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<AiOutlineMail />
						</div>
						<div className="bg-white rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
			<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
				<svg
					class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
					viewBox="0 0 1155 678"
				>
					<path
						fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
						fill-opacity=".3"
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
