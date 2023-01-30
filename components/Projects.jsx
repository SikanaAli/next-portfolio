import Link from "next/link";
import React from "react";
import deserter2d from "../public/assets/projects/deserter2d.jpg";
import publicApis from "../public/assets/projects/public_apis.png";
import googleUiClone from "../public/assets/projects/googleUiClone.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className=" grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={"Dserter 2D"}
            backgroundImg={deserter2d}
            projectType={"Unity"}
          />
          <ProjectItem
            title={"Public Apis"}
            backgroundImg={publicApis}
            projectType={"NextJS"}
          />
          <ProjectItem
            title={"Google UI Clone"}
            backgroundImg={googleUiClone}
            projectType={"HTML &apos; CSS"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
