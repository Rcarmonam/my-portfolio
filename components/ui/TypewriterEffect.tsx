'use client'

import { motion } from 'framer-motion'

export default function TypewriterEffect() {
  return (
    <div className="flex items-center">
      <motion.div
        className="overflow-hidden whitespace-nowrap"
        initial={{ width: '0%' }}
        animate={{ width: 'fit-content' }}
        transition={{
          duration: 0.8,
          ease: 'linear',
          delay: 0.5,
        }}
      >
        <h1 className="text-3xl font-medium text-zinc-50">Hello World! 👋</h1>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="inline-block w-[3px] h-8 bg-zinc-50 ml-1 rounded-sm"
      />
    </div>
  )
}
