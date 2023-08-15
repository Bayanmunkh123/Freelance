import { gql } from "@apollo/client"

export const PRODUCT_LIST = gql`
  query products($input: ProductWhereInput) {
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
export const PRODUCT_DETAIL = gql`
  query product($input: ProductUniqueWhereInput) {
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
