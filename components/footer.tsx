"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getWhatsAppUrl } from "@/lib/whatsapp"

const navigation = {
  cleans: [
    { name: "Residential Cleaning", href: "/services#residential" },
    { name: "Commercial Cleaning", href: "/services#commercial" },
    { name: "Move-In/Move-Out", href: "/services#moving" },
    { name: "Gift Cards", href: "#" },
    { name: "Cancellation Policy", href: "#" },
  ],
  company: [
    { name: "Our Products", href: "#", whatsapp: true },
    { name: "Jobs", href: "#" },
    { name: "Regions", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Blog", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <footer ref={ref} className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div
            className={`col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="/logo.png"
                alt="Prestige Cleaning By Caro"
                className="h-12 w-auto"
              />
              <span className="font-serif text-lg font-semibold text-background tracking-wide">
                Luxury Cleaning Excellence
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Custom housekeeping on demand. That&apos;s the Prestige Cleaning way.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Cleans */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-semibold text-background mb-4">Our Cleans</h3>
            <ul className="space-y-3">
              {navigation.cleans.map((item, index) => (
                <li
                  key={item.name}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item, index) => (
                <li
                  key={item.name}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                >
                  {item.whatsapp ? (
                    <a
                      href={getWhatsAppUrl('Quiero información sobre sus productos')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-semibold text-background mb-4">Follow Us On</h3>
            <ul className="space-y-3">
              {socialLinks.map((item, index) => (
                <li
                  key={item.name}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <a
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="tel:+12146772559" className="hover:text-background transition-colors duration-300">
                  214.677.2559
                </a>
              </li>
              <li className="leading-relaxed">
                3130 Harvard Avenue
                <br />
                Dallas TX
                <br />
                75205
                <br />
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm text-background/50">© Prestige Cleaning By <span className="italic">C</span>aro {new Date().getFullYear()} All rights reserved.</p>
          <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
