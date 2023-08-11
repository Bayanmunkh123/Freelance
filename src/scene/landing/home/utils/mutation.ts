import { gql } from '@apollo/client'

export const PRODUCT_CREATE = gql`
  mutation ProductCreate($input: ProductInput!) {
    productCreate(input: $input) {
      address1
      city
      constStatus
      description
      district
      floorNumber
      floors
      id
      images
      name
      organizationId
      price
      priceSqr
      productStatus
      releaseDate
      roomNumber
      sqr
    }
  }
`
