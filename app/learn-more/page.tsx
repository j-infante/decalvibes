import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/header"

export default function LearnMore() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header showNav={false} />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn More About Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover how Decal Vibes can transform your business operations and drive growth.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-[800px] space-y-8 mt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your One-Stop Shop: Decal Vibes' Full Range of Services</h2>
                <ul className="space-y-2">
                  {[
                    "Computerized and Machine cut vinyls",
                    "High Quality and Water proof stickers",
                    "Customizable design and layouts",
                    "3-5 years sticker lifespan",
                    "Free quotation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Choose Decal Vibes?</h2>
                <p className="text-muted-foreground">
                  Since day one, Decal Vibes has delivered exceptional results. For over a decade, we've helped companies like yours enhance their visibility, strengthen their brand identity, and drive growth with our high-quality decals, wraps, and printing services. Our experienced team provides the support you need to make a lasting impression.
                </p>
              </div>
              <div className="text-center">
                <Button asChild>
                  <Link href="/get-started">Start Your Journey with Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

