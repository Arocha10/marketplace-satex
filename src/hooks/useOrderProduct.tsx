import { useState } from "react";
import { ProductVariants } from "../types/Product";

export function useOrderProduct():[ProductVariants | undefined, (value: ProductVariants) => void] {
  const [product, setProduct] = useState<ProductVariants | undefined>(undefined);

  const updateVariant = (product:ProductVariants) => setProduct(product)

  return [product, updateVariant];
}