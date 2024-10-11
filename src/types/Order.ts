import { ProductVariants } from "./Product"

export interface OrderLine {
  quantity: number
  linePriceWithTax: number
  productVariant: ProductVariants

}
export interface Order {
  id: string
  subTotal: string
  totalQuantity: number
  lines?: OrderLine[]
}