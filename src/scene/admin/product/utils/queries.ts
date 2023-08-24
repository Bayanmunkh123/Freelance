import { gql } from "@apollo/client"

export const PRODUCTS = gql`
  query products($where: ProductWhereInput) {
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
export const PRODUCT = gql`
  query product($input: ProductUniqueWhereInput) {
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
export const USERFAVORITE_LIST = gql`
  query userFavoriteList {
    userFavoriteList {
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
        organizationId
      }
    }
  }
`
