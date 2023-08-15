import { gql } from "@apollo/client"

export const PRODUCTS = gql`
  query productsLanding($input: ProductWhereInput) {
    products(input: $input) {
      data {
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
  }
`
export const PRODUCT = gql`
  query productLanding($input: ProductUniqueWhereInput!) {
    product(input: $input) {
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
