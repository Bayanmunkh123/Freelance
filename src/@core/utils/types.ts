import { ConstructionStatusEnum, ProductStatusEnum } from "src/generated"
import * as yup from "yup"

interface MonthYear {
  year: number
  month: number
}

interface Fns {
  cardType(cardNumber: string): string
  formatCardNumber(cardNumber: string): string
  validateCardNumber(cardNumber: string): boolean
  validateCardCVC(cvc: string, type?: string): boolean
  validateCardExpiry(monthYear: string, year?: string): boolean
  cardExpiryVal(monthYear: string | HTMLInputElement): MonthYear
}

export type PaymentTypes = {
  fns: Fns
  formatCardCVC(elem: HTMLInputElement): HTMLInputElement
  restrictNumeric(elem: HTMLInputElement): HTMLInputElement
  formatCardNumber(elem: HTMLInputElement): HTMLInputElement
  formatCardExpiry(elem: HTMLInputElement): HTMLInputElement
}

// export interface ProductInput {
//   id: string
//   images: string
//   name: string
//   city: string
//   district: string
//   address1: string
//   sqr: number
//   priceSqr: number
//   releaseDate: Date | number
//   price: number
//   //uliral: number
//   floors: number
//   floorNumber: number
//   roomNumber: number
//   constStatus: ConstructionStatusEnum
//   productStatus: ProductStatusEnum
//   description: string
//   organizationId: string
// }
export const validationCreateProductSchema = yup.object().shape({
  images: yup.string().required(),
  name: yup.string().required(),
  city: yup.string(),
  district: yup.string(),
  address1: yup.string(),
  sqr: yup.number(),
  priceSqr: yup.number(),
  releaseDate: yup.date(),
  //uliral: yup.number(),
  floors: yup.number(),
  floorNumber: yup.number(),
  roomNumber: yup.number(),
  constStatus: yup.string(),
  productStatus: yup.string(),
  description: yup.string(),
})
export interface mongolianProvincesType {
  id: number
  name: string
  child: string[]
}

export const filterApartmentSchema = yup.object().shape({
  location: yup.string().required(),
  type: yup.string().required(),
  price: yup.number().required(),
  size: yup.number().required(),
  roomNo: yup.number().required(),
  status: yup.string().required(),
})
export interface RenderValueType {
  label: string | number | ConstructionStatusEnum
  value: string | number | ConstructionStatusEnum
}
