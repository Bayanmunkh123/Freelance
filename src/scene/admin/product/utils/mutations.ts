import { gql } from "@apollo/client"
export const PRODUCT_CREATE = gql`
  mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
      id
      images
      name
      address1
      city
      district
      floors
      floorNumber
      roomNumber
      sqr
      priceSqr
      price
      description
      releaseDate
      constStatus
      productStatus
      organizationId
    }
  }
`
export const PRODUCT_UPDATE = gql`
  mutation productUpdate($input: ProductInput!, $id: String!) {
    productUpdate(input: $input, _id: $id) {
      id
      images
      name
      address1
      city
      district
      floors
      floorNumber
      roomNumber
      sqr
      priceSqr
      price
      description
      releaseDate
      constStatus
      productStatus
      organizationId
    }
  }
`
