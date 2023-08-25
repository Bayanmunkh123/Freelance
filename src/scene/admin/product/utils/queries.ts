import { gql } from "@apollo/client"

export const PRODUCTS = gql`
  query products($where: ProductWhereInput) {
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
export const PRODUCT = gql`
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
