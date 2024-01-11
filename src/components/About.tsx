import React from 'react'

const About = () => {
  return (
		<div
			className=" w-full h-screen z-50 relative backdrop-blur-sm flex item-center text-black dark:text-white"
			id="about"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 z-50 backdrop-blur-sm">
				<div className="col-span-2 text-black dark:text-white">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 ">
						{"// I am not you regular developer"}
					</p>
					<p className="py-2 text-justify">
						Growing up I had always enjoyed playing videogames; the
						more I played the more I wanted to know how the very
						games I played where made. While pursuing my Diploma in
						IT an opportunity arose in which I had decide what my
						Final Year Project would be. I proceeded to develop a
						game using Unity Game Engine alongside the Thesis (late
						2016).
					</p>
					<p className="py-2 text-justify">
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
					<p className="py-2">
						I now spend my time Building projects with NextJS,
						Superbase and learning new technologies
					</p>
					<a href="#projects">
						<p className="py-2 underline cursor-pointer">
							check out some of my latest projects
						</p>
					</a>
				</div>
			</div>
		</div>
  );
}

export default About