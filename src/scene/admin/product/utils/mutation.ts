import { gql } from "@apollo/client"
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
export const PRODUCT_UPDATE = gql`
  mutation Mutation($input: ProductInput!, $id: String!) {
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
