'use client'

import { motion } from 'framer-motion'

export default function TypewriterEffect() {
  return (
    <div className="flex min-w-0 items-center">
      <motion.div
        className="max-w-full overflow-hidden whitespace-nowrap"
        initial={{ width: '0%' }}
        animate={{ width: 'fit-content' }}
        transition={{
          duration: 0.8,
          ease: 'linear',
          delay: 0.5,
        }}
      >
        <h1 className="text-2xl font-medium text-zinc-50 sm:text-3xl">Hello World! 👋</h1>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="ml-1 inline-block h-7 w-[3px] shrink-0 rounded-sm bg-zinc-50 sm:h-8"
      />
    </div>
  )
}
