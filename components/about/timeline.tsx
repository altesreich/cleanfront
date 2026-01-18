"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const timelineItems = [
  {
    year: "1913",
    title: "Meet Vella",
    description:
      "Born in 1913, Vella Veatch was our founder and CEO's grandmother. She held the values of hard work, resilience, and spotless grout near and dear.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Vella Veatch portrait",
    layout: "left",
  },
  {
    year: "2009",
    title: "How it all started",
    description:
      "Jeri carried these values with her when she moved her family to Dallas and founded Highland Park Housekeeping. Over the next 15 years, HPH grew to become Dallas's #1 cleaning service, with 42 teams cleaning across DFW.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Cleaning supplies",
    layout: "right",
  },
  {
    year: "2023",
    title: "Vella was born",
    description:
      "In 2023, after meticulous research, relentless fine-tuning, and putting thousands of sponges to the test, Jeri launched Vella—a fresh approach designed specifically to solve the timeless challenges of keeping a home truly spotless. The secret? Doing things the Vella way: completely, thoroughly, and never cutting corners.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Modern Vella cleaning",
    layout: "left",
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof timelineItems)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  const isLeft = item.layout === "left"

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

      {/* Year badge */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold shadow-lg">
          {item.year}
        </div>
      </div>

      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 ${
          isLeft ? "" : "direction-rtl"
        }`}
      >
        {/* Content */}
        <div
          className={`space-y-4 transition-all duration-1000 ${
            isLeft ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16 lg:order-2"
          } ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`}`}
          style={{ transitionDelay: `${200}ms` }}
        >
          {/* Mobile year badge */}
          <div className="lg:hidden">
            <span className="inline-block bg-primary text-primary-foreground font-serif text-sm font-semibold px-4 py-2 rounded-full">
              {item.year}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            {item.title.split(" ").map((word, i) =>
              i === item.title.split(" ").length - 1 ? (
                <span key={word} className="italic text-primary">
                  {word}
                </span>
              ) : (
                `${word} `
              )
            )}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
        </div>

        {/* Image */}
        <div
          className={`relative transition-all duration-1000 ${
            isLeft ? "lg:pl-16" : "lg:pr-16 lg:order-1"
          } ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isLeft ? "translate-x-10" : "-translate-x-10"}`}`}
          style={{ transitionDelay: `${400}ms` }}
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.imageAlt}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {timelineItems.map((item, index) => (
          <TimelineItem key={item.year} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
