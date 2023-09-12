"use client"

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@mui/material";

type ProjectProps = (typeof projectsData)[number];

export default function Project(props: ProjectProps) {
  const { title, description, tags, imageUrl } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {title ? (
        <motion.section ref={ref}
          className="group bg-gray-100 max-w-[42rem] overflow-hidden border
               border-black/5 rounded-lg relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0
               shadow-2xl cursor-pointer hover:bg-gray-300 transition"
               style={{
                scale: scaleProgress,
                opacity: opacityProgress
               }}
        >
          <div
            className="pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:pr-2 sm:max-w-[50%] h-full
          flex flex-col"
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
            {tags ? (
              <ul className="flex flex-wrap gap-1 mt-4 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    key={index}
                    className="bg-black/[0.7] px-3 py-1 uppercase text-white
                      text-[0.7rem] rounded-full tracking-wider"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {imageUrl && !isMobile ? (
            <Image
              src={imageUrl}
              alt="Image Project"
              quality={95}
              className="absolute top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
              group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-3 transition"
            />
          ) : null}
        </motion.section>
      ) : null}
    </>
  );
}
