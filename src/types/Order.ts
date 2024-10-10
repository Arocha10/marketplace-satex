import { ProductVariants } from "./Product"

export interface OrderLine {
  id: number
  quantity: number
  linePriceWithTax: number
  productVariant: ProductVariants

}
export interface Order {
  id: number
  subTotal: string
  totalQuantity: number
  lines?: OrderLine[]
}