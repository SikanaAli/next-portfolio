import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import HeroPatern from "@/components/hero/HeroPatern";
import Skills from "@/components/skills/Skills";
import React from "react";

function page() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<HeroPatern />
		</>
	);
}

export default page;
