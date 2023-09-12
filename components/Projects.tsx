"use client"

import React from "react";
import SectionHeading from "./Heading-h2";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useMenuInView } from "@/lib/hooks";

export default function Projects() {
  const {ref} = useMenuInView("Projects", 0.4);

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
