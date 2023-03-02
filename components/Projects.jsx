import Link from "next/link";
import React from "react";
import deserter2dImg from "../public/assets/projects/deserter2d.jpg";
import publicApisImg from "../public/assets/projects/public_apis.png";
import googleUiCloneImg from "../public/assets/projects/googleUiClone.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={"Dserter 2D"}
            backgroundImg={deserter2dImg}
            projectType={"Unity"}
            projectUrl={"/dserter2d"}
          />
          <ProjectItem
            title={"Public Apis"}
            backgroundImg={publicApisImg}
            projectType={"NextJS"}
            projectUrl={"/publicapis"}
          />
          <ProjectItem
            title={"Google UI Clone"}
            backgroundImg={googleUiCloneImg}
            projectType={"HTML & CSS"}
            projectUrl={"/googleclone"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
