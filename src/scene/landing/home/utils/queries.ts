import { gql } from "@apollo/client"

export const PRODUCTS_LANDING = gql`
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
export const PRODUCT_LANDING = gql`
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
