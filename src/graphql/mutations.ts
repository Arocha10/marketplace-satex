import { gql } from '@apollo/client'

export const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrder($variantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $variantId, quantity: $quantity){
      ...on Order {
        id
        subTotal
        totalQuantity
        lines {
          productVariant {
            name
            price
            id
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

export const REMOVE_ORDER_LINE = gql`
  mutation removeAllOrderLines {
    removeAllOrderLines {
      ...on Order {
        id
        subTotal
        totalQuantity
        lines {
          id
          productVariant {
            name
            price
            id
          }
          quantity
          linePriceWithTax
        }
      }
      ...on OrderModificationError {
        errorCode
        message
      }
    }
  }
`