export interface ProductVariants {
  id: string
  name: string
  price: number
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  featuredAsset: {
  preview?: string
  height: string
  }
  variants?: ProductVariants[]
}
