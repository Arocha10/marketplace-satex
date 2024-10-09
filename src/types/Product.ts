export interface ProductVariants {
  id: number
  name: string
  price: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  featuredAsset: {
  preview?: string
  height: string
  }
  variants?: ProductVariants[]
}
