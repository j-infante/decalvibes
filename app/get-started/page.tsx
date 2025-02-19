"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/header"
// import { Facebook } from "@/components/icons"
import { motion } from "framer-motion"

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get Started with Decal Vibes
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with us on Facebook to discuss your custom decal needs.
                </p>
              </div>
            </div>
            <motion.div 
              className="mx-auto max-w-[400px] mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full text-lg h-16 bg-[#1877F2] hover:bg-[#1864D9] relative overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-[#1877F2]/50"
              >
                <Link 
                  href="https://www.facebook.com/p/Decal-Vibes-61559424119824/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 relative z-10"
                >
                  <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Visit our Facebook Page
                  </span>
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Follow us for updates, promotions, and to see our latest work!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="white" />
      <path
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
        fill="#1877F2"
      />
    </svg>
  )
}

