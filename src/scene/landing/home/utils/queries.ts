import { gql } from "@apollo/client"

export const PRODUCTS_LANDING = gql`
  query productsLanding($where: ProductWhereInput) {
    products(where: $where) {
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
        bannerStatus
        actionType
        ProductRooms {
          bathNumber
          bedNumber
          livingNumber
          bedRoom
          bathRoom
          livingRoom
          viewWindow
          kitchenNumber
          kitchenRoom
        }
        organizationId
      }
    }
  }
`
export const PRODUCT_LANDING = gql`
  query productLanding($input: ProductUniqueWhereInput) {
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
      bannerStatus
      actionType
      ProductRooms {
        bathNumber
        bedNumber
        livingNumber
        bedRoom
        bathRoom
        livingRoom
        viewWindow
        kitchenNumber
        kitchenRoom
      }
      organizationId
    }
  }
`
