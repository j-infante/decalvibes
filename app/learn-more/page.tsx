import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LearnMore() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="text-2xl font-bold">Acme Inc</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn More About Our Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover how Acme Inc can transform your business operations and drive growth.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-[800px] space-y-8 mt-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Comprehensive Suite of Tools</h2>
                <ul className="space-y-2">
                  {[
                    "Advanced Analytics Dashboard",
                    "Automated Workflow Management",
                    "Secure Cloud Storage Solutions",
                    "Real-time Collaboration Tools",
                    "Customizable Reporting System",
                    "24/7 Customer Support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Choose Acme Inc?</h2>
                <p className="text-muted-foreground">
                  With over a decade of experience in business solutions, Acme Inc has helped thousands of companies
                  streamline their operations, increase productivity, and achieve sustainable growth. Our cutting-edge
                  technology, coupled with our dedicated support team, ensures that you have all the tools and
                  assistance you need to succeed in today's competitive market.
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Back to Home
          </Link>
        </nav>
      </footer>
    </div>
  )
}

