"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const timelineItems = [
  {
    year: "2020",
    title: "The Vision Begins",
    description:
      "Caro recognized the need for premium cleaning services that combine meticulous attention to detail with professional efficiency. Her passion for perfection drives every cleaning.",
    image:
      "/images/web/web-10.jpg",
    imageAlt: "Professional cleaner with vision for excellence",
    layout: "left",
  },
  {
    year: "2022",
    title: "Building the Foundation",
    description:
      "Prestige Cleaning By Caro was established with a commitment to hotel-level detail in every residential and commercial space. We assembled a team of expertly trained professionals.",
    image:
      "/images/web/web-11.jpg",
    imageAlt: "Professional cleaning supplies and equipment",
    layout: "right",
  },
  {
    year: "2024",
    title: "Excellence in Action",
    description:
      "Today, Prestige Cleaning By Caro delivers unparalleled cleaning services with state-of-the-art equipment and a dedication to health, safety, and customer satisfaction. No arrival windows, just premium results.",
    image:
      "/images/web/web-12.jpg",
    imageAlt: "Professional cleaning team at work",
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
