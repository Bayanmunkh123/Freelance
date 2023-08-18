import { gql } from "@apollo/client"
export const PRODUCT_CREATE = gql`
  mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
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
`
export const PRODUCT_UPDATE = gql`
  mutation productUpdate($input: ProductInput!, $id: String!) {
    productUpdate(input: $input, _id: $id) {
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
export const PRODUCT_DELETE = gql`
  mutation productDelete($id: String!) {
    productDelete(_id: $id)
  }
`
