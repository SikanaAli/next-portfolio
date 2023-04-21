import Image from "next/image";
import React from "react";

const assetLocation = "/assets/skills";

const skillAssets = [
	{ imgLocation: `${assetLocation}/html.png`, name: "HTML" },
	{ imgLocation: `${assetLocation}/csharp.png`, name: "C-Sharp" },
	{ imgLocation: `${assetLocation}/nodejs.png`, name: "JavaScrip" },
	{ imgLocation: `${assetLocation}/nextjs.png`, name: "NextJS" },
	{ imgLocation: `${assetLocation}/mssql.png`, name: "Microsft SQL" },
	{ imgLocation: `${assetLocation}/postgres.png`, name: "PostgreSQL" },
	{ imgLocation: `${assetLocation}/firebase.png`, name: "Firbase" },
	{ imgLocation: `${assetLocation}/flutter.png`, name: "Flutter" },
	{ imgLocation: `${assetLocation}/dart.png`, name: "Dart" },
	{ imgLocation: `${assetLocation}/arduino.png`, name: "Arduino" },
	{ imgLocation: `${assetLocation}/circuit.png`, name: "CircuitPyhton" },
	{ imgLocation: `${assetLocation}/python.png`, name: "Python" },
];

function Skills() {
	return (
		<div id="skills" className="w-full relative lg:h-screen py-16 p-2">
			<div class="absolute w-full top-0 left-0 overflow-hidden leading-[0] rotate-180 ">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
						class="fill-[#E4DFFC]"
					></path>
				</svg>
			</div>
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillAssets.map((item, i) => {
						return (
							<div
								key={i}
								className="P-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-500"
							>
								<div className="grid grid-cols-2 gap-4 justify-center items-center">
									<div className="m-auto">
										<Image
											src={item.imgLocation}
											width={64}
											height={64}
											alt="/"
										/>
									</div>
									<div className="flex flex-col items-center justify-center">
										<h3>{item.name}</h3>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="absolute w-full bottom-0 left-0 overflow-hidden leading-[0]">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
						className="fill-[#7FE17F]"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default Skills;
