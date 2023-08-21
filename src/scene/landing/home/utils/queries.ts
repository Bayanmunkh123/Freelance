import { gql } from "@apollo/client"

export const PRODUCTS_LANDING = gql`
  query productsLanding($where: ProductWhereInput) {
    products(where: $where) {
      data {
        ProductRooms {
          bathNumber
          bathRoom
          bedNumber
          bedRoom
          kitchenNumber
          kitchenRoom
          livingNumber
          livingRoom
          viewWindow
        }
        address1
        bannerStatus
        city
        constStatus
        description
        district
        floorNumber
        floors
        images
        id
        name
        organizationId
        price
        priceSqr
        releaseDate
        roomNumber
        sqr
      }
    }
  }
`
export const PRODUCT_LANDING = gql`
  query productLanding($input: ProductUniqueWhereInput) {
    product(input: $input) {
      ProductRooms {
        bathNumber
        bathRoom
        bedNumber
        bedRoom
        kitchenNumber
        kitchenRoom
        livingNumber
        livingRoom
        viewWindow
      }
      address1
      bannerStatus
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
      releaseDate
      roomNumber
      sqr
    }
  }
`
