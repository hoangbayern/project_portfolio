"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useMenuInView } from "@/lib/hooks";

export default function Intro() {
  const controls = useAnimation();
  const {ref} = useMenuInView("Home", 0.7);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
    });
  }, [controls]);

  return (
    <section ref={ref} className="text-center mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/rmtdev.png"
            alt="image personal"
            height="120"
            width="120"
            loading="eager"
            className="w-40 h-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I&apos;m HuyHoang.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex items-center justify-center gap-3 flex-col sm:gap-2 sm:flex-row font-medium text-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 text-white bg-gray-900 py-3 px-7
           rounded-full shadow-xl hover:scale-110 hover:shadow-none hover:bg-gray-950 transition"
        >
          Contact with me <BsArrowRight 
          className="group-hover:translate-x-1 transition"/>
        </Link>
        <a
          href="/rmtdev.png" download
          className="group flex items-center gap-2 text-gray-700 bg-white py-3 px-7
           rounded-full shadow-xl hover:scale-110 hover:shadow-2xl hover:text-gray-950 transition"
        >
          Download CV <HiDownload 
          className="group-hover:translate-x-1 transition"/>
        </a>
        <Link
          href="#"
          className="flex items-center gap-2 text-gray-700 bg-white p-4
           rounded-full shadow-xl hover:scale-110 active:scale-105 hover:shadow-2xl
            hover:text-gray-950 transition"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://github.com/hoangbayern" target="_blank"
          className="flex items-center gap-2 text-gray-700 bg-white p-4
           rounded-full shadow-xl hover:scale-110 active:scale-105 hover:shadow-2xl
            hover:text-gray-950 transition" 
        >
          <BsGithub />
        </Link>
      </motion.div>
    </section>
  );
}
