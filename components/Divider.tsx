"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Divider() {
  return (
    <motion.div className='bg-gray-400 h-16 w-1 my-24 rounded-full hidden sm:block'
    initial={{ y: 100, opacity:0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.12 }}></motion.div>
  )
}
