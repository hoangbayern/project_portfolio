"use client"

import { useActiveMenuScrollContext } from "@/context/active-menu-scroll";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./data";

type SectionName = (typeof links)[number]["name"];

export function useMenuInView(nameMenu: SectionName, threshold= 0.7) {
    const [ref, inView] = useInView({
        threshold,
      })
      const { setActiveMenu } = useActiveMenuScrollContext();
    
      useEffect(()=> {
        if(inView){
          setActiveMenu(nameMenu)
        }
      }, [inView, setActiveMenu, nameMenu])
      return {
        ref,
      };
}