import { gql } from '@apollo/client'

// Here we put queries. Remove next line
export const GET_PRODUCTS = gql`
query GetProducts {
    products {
        items {
            id
            name
            slug
            description
            featuredAsset {
                preview
                height
            }
            variants {
              id
              price
              name
            }
        }
    }
}
`

export const FIND_PRODUCT = gql`
query GetProduct($productId: ID!) {
    product(id: $productId){
      id
      name
      description
      variants {
              id
              price
              name
              featuredAsset {
                preview
                height
              }
            }
    }
  }
`