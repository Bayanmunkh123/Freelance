import { gql } from "@apollo/client"

export const PRODUCT_ORG = gql`
query ProductsOrg($input: ProductsOrgWhereInput) {
  productsOrg(input: $input) {
    data {
      address1
      constStatus
      city
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
}
`