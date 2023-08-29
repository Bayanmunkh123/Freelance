import { gql } from "@apollo/client"
export const PRODUCT_CREATE = gql`
  mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
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
export const PRODUCT_UPDATE = gql`
  mutation productUpdate($input: ProductInput!, $id: String!) {
    productUpdate(input: $input, _id: $id) {
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
export const PRODUCTSTATUS_UPDATE = gql`
  mutation productStatusUpdate($id: String!, $input: ProductStatusChange!) {
    productStatusUpdate(_id: $id, input: $input)
  }
`
