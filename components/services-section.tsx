"use client"
import { motion } from "framer-motion"
import { 
  Car, 
  Bike, 
  FileText, 
  RefreshCw, 
  Lightbulb, 
  Truck,
  Building2,
  SignpostBig,
  Image as ImageIcon,
  Shirt,
  Coffee,
  Contact,
  Square,
  Sticker,
  Play,
  Mail
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Motor/Car Decals",
    description: "Custom decals to make your vehicle stand out",
    icon: Bike,
  },
  {
    title: "Car/Motor Wrapping",
    description: "Full vehicle wraps for maximum impact",
    icon: Car,
  },
  {
    title: "Temporary Plate",
    description: "High-quality temporary vehicle plates",
    icon: FileText,
  },
  {
    title: "Old Plate Restoration",
    description: "Restore and refresh old number plates",
    icon: RefreshCw,
  },
  {
    title: "Headlight Tint",
    description: "Professional headlight tinting services",
    icon: Lightbulb,
  },
  {
    title: "Trucking Stickers",
    description: "Durable stickers for commercial vehicles",
    icon: Truck,
  },
  {
    title: "Company Stickers",
    description: "Brand your business with custom stickers",
    icon: Building2,
  },
  {
    title: "Signage's",
    description: "Eye-catching business signage solutions",
    icon: SignpostBig,
  },
  {
    title: "Tarpaulin",
    description: "Custom printed tarpaulins for events",
    icon: ImageIcon,
  },
  {
    title: "T-Shirt Printing",
    description: "Quality custom t-shirt printing",
    icon: Shirt,
  },
  {
    title: "Mug Press",
    description: "Personalized mug printing services",
    icon: Coffee,
  },
  {
    title: "Calling Card",
    description: "Professional business card design",
    icon: Contact,
  },
  {
    title: "Sintra Boards",
    description: "Durable printed Sintra board signs",
    icon: Square,
  },
  {
    title: "Printed Stickers",
    description: "Custom stickers for any purpose",
    icon: Sticker,
  },
  {
    title: "Vlogger's Logo",
    description: "Stand-out logos for content creators",
    icon: Play,
  },
  {
    title: "Invitation",
    description: "Beautiful custom event invitations",
    icon: Mail,
  },
]

export function ServicesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Comprehensive solutions for all your custom printing and decal needs
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-lg border bg-background p-6",
                "hover:shadow-lg transition-all duration-200 ease-in-out",
                "hover:border-primary/50"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold leading-none tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 