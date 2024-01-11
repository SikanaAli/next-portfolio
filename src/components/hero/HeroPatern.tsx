"use client";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HeroPatern() {
	const [IsDark, setIsDark] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(prefers-color-scheme: dark)");

		if (mq.matches) {
			setIsDark(true);
		}

		// This callback will fire if the perferred color scheme changes without a reload
		mq.addEventListener("change", (evt) => setIsDark(evt.matches));
	}, []);

	const intiParticales = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);
	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	const particlColor = IsDark ? "#ffffff" : "#000000";
    const particlBgColor = IsDark ? "#000000" : "#ffffff";

	return (
		<Particles
			id="heroParticals"
			init={intiParticales}
			loaded={particlesLoaded}
			className="fixed z-0 w-screen h-screen top-0 bottom-0"
			canvasClassName="dark:bg-black bg-white z-0"
			options={{
				background: {
					color: {
						value: particlBgColor,
					},
				},
				
				fpsLimit: 75,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: particlColor,
					},
					links: {
						color: particlColor,
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1600,
						},
						value: 50,
					},
					opacity: {
						value: 1,
					},
					shape: {
						type: "triangle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}

export default HeroPatern;
