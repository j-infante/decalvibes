import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  showNav?: boolean
}

export function Header({ showNav = false }: HeaderProps) {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <div className="container mx-auto max-w-7xl flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image 
            src="/decalvibes.svg?height=32&width=32" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="rounded-lg" 
          />
          <span className="ml-2 text-2xl font-bold">Decal Vibes</span>
        </Link>
        {showNav && (
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block"
              href="#features"
            >
              Services
            </Link>
            {/* <Link
              className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block"
              href="#testimonials"
            >
              Testimonials
            </Link> */}
            <ThemeToggle />
          </nav>
        )}
      </div>
    </header>
  )
} 