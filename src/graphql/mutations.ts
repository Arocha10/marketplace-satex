import { gql } from '@apollo/client'

export const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrder($variantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $variantId, quantity: $quantity){
      ...on Order {
        id
        code
        totalQuantity
        totalWithTax
        lines {
          productVariant {
            name
          }
          quantity
          linePriceWithTax
        }
      }
      ...on ErrorResult {
        errorCode
        message
      }
    }
  }
`