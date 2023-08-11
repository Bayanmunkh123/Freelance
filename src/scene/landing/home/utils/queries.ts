import { gql } from '@apollo/client'

export const PRODUCT_LIST = gql`
  query Products($input: ProductsWhereInput) {
    products(input: $input) {
      count
      data {
        address1
        city
        constStatus
        description
        district
        floors
        floorNumber
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
  }
`
