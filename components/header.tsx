"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Prestige Cleaning By Caro"
                className="h-16 w-auto"
              />
              <span className="font-serif text-xl font-semibold text-foreground tracking-wide hidden sm:block">
                Proud To be Your Cleaning Choice
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                      pathname === link.href ? "w-6" : "w-0 group-hover:w-6"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
     
              <Button data-whatsapp-message="Quiero reservar una limpieza." className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 relative overflow-hidden group">
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground rounded-full hover:bg-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          style={{ zIndex: 9999 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-background"
          style={{ zIndex: 10000 }}
        >
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur-md">
              <span className="font-serif text-xl font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground rounded-full hover:bg-secondary transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-6 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 mt-6 border-t border-border">
                  <Button
                    data-whatsapp-message="Quiero reservar una limpieza."
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
