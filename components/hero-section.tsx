"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
        >
          Revolutionize your business visibility with{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-primary"
          >
            Decal Vibes
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
        >
          From vehicle wraps to company signage, we streamline your marketing, boost your brand awareness, and drive growth with custom decal solutions.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <Button asChild>
          <Link href="/get-started">Get Started</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/learn-more">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  )
} 