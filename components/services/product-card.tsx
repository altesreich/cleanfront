"use client"

import { Button } from "@/components/ui/button"
import type { Product } from "@/data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white dark:bg-muted flex items-center justify-center p-6 md:border-r border-border">
          {product.image ? (
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
          ) : (
            <div className="w-full h-32 bg-white dark:bg-muted flex items-center justify-center text-sm text-muted-foreground">
              No image
            </div>
          )}
        </div>

        <div className="p-6 md:col-span-2 space-y-3">
          <h3 className="text-lg font-medium text-foreground">{product.title}</h3>
          <p className="text-sm text-muted-foreground">{product.short}</p>
          <p className="text-sm text-muted-foreground line-clamp-4">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm font-semibold text-foreground">{product.price || ""}</div>
            <Button size="sm" data-whatsapp-message={`Quiero más información sobre ${product.title}`}>
              View details
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
