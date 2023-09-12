"use client"

import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data';

type SectionName = (typeof links)[number]["name"];
type ActiveMenuScrollProps = {
    children: React.ReactNode;
}
type ActiveMenuScrollContextType = {
    activeMenu: SectionName,
    setActiveMenu: React.Dispatch<React.SetStateAction<SectionName>>,
}

const ActiveMenuScrollContext = createContext<ActiveMenuScrollContextType | null>(null);

export default function ActiveMenuScroll({children}: ActiveMenuScrollProps) {
    const [activeMenu, setActiveMenu] = useState<SectionName>("Home");

  return (
    <ActiveMenuScrollContext.Provider value={{ activeMenu, setActiveMenu }}>
        {children}
    </ActiveMenuScrollContext.Provider>
  );
}

export function useActiveMenuScrollContext() {
    const context = useContext(ActiveMenuScrollContext);

    if(context === null){
        throw new Error (
            "Error!"
        )
    }
    return context;
}
