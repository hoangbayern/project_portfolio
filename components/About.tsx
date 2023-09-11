"use client"

import React from "react";
import SectionHeading from "./Heading-h2";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="text-center leading-8 max-w-[45rem]"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.12 }}>
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3 text-lg">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="text-lg">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing soccer. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">imformation technology</span>. I&apos;m
        also learning how to play the piano.
      </p>
    </motion.section>
  );
}
