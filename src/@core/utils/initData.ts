import { ConstructionStatusEnum, ProductStatusEnum } from "src/generated"
import { mongolianProvincesType } from "./types"
import { RenderValueType } from "./types"

export const distNames = [
  "Баянгол",
  "Баянзүрх",
  "Хан-Уул",
  "Чингэлтэй",
  "Сүхбаатар",
  "Налайх",
  "Багахангай",
  "Сонгинохайрхан",
  "Багануур",
]

export const mongolianProvinces: mongolianProvincesType[] = [
  {
    id: 1,
    name: "Улаанбаатар",
    child: distNames,
  },
  {
    id: 2,
    name: "Архангай",
    child: [],
  },
  {
    id: 3,
    name: "Баян-Өлгий",
    child: [],
  },
  {
    id: 4,
    name: "Баянхонгор",
    child: [],
  },
  {
    id: 5,
    name: "Булган",
    child: [],
  },
  {
    id: 6,
    name: "Говь-Алтай",
    child: [],
  },
  {
    id: 7,
    name: "Говьсүмбэр",
    child: [],
  },
  {
    id: 8,
    name: "Дархан-Уул",
    child: [],
  },
  {
    id: 9,
    name: "Дорноговь",
    child: [],
  },
  {
    id: 10,
    name: "Дорнод",
    child: [],
  },
  {
    id: 11,
    name: "Дундговь",
    child: [],
  },
  {
    id: 12,
    name: "Завхан",
    child: [],
  },
  {
    id: 13,
    name: "Орхон",
    child: [],
  },
  {
    id: 14,
    name: "Өвөрхангай",
    child: [],
  },
  {
    id: 15,
    name: "Өмнөговь",
    child: [],
  },
  {
    id: 16,
    name: "Сүхбаатар",
    child: [],
  },
  {
    id: 17,
    name: "Сэлэнгэ",
    child: [],
  },
  {
    id: 18,
    name: "Төв",
    child: [],
  },
  {
    id: 19,
    name: "Увс",
    child: [],
  },
  {
    id: 20,
    name: "Ховд",
    child: [],
  },
  {
    id: 21,
    name: "Хөвсгөл",
    child: [],
  },
  {
    id: 22,
    name: "Хэнтий",
    child: [],
  },
]

export const RenderValues: RenderValueType[] = [
  {
    label: "Орон сууц",
    value: "Орон сууц",
  },
  {
    label: "Оффис",
    value: "Оффис",
  },
  {
    label: "Газар",
    value: "Газар",
  },
  {
    label: "Дэлгүүр",
    value: "Дэлгүүр",
  },
  {
    label: "Хувийн сууц",
    value: "Хувийн сууц",
  },
  {
    label: "Барилга",
    value: "Барилга",
  },
  {
    label: "Агуулах",
    value: "Агуулах",
  },
  {
    label: "Нийтийн байр",
    value: "Нийтийн байр",
  },
  {
    label: "Зогсоол",
    value: "Зогсоол",
  },
]
export const RenderNumbers: RenderValueType[] = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: "5+",
    value: 5,
  },
]
export const RenderStatus: RenderValueType[] = [
  {
    label: "Тун удахгүй",
    value: ConstructionStatusEnum.SOON,
  },
  {
    label: "Шинэ",
    value: ConstructionStatusEnum.NEWBUILDING,
  },
  {
    label: "Хуучин",
    value: ConstructionStatusEnum.OLD,
  },
  {
    label: "Байхгүй",
    value: ConstructionStatusEnum.DEFAULT,
  },
]
export interface ListDataType {
  id: string
  name: string
  constStatus: string
  productStatus: string
  description: string
  address1: string
  roomNumber: number
  bedNo: number
  bathNo: number
  sqr: number
  price: number
  isFav: boolean
  images: string[]
  parking: number
  releaseDate: Date
  floors: number
  floorNumber: number
  highlights: string[]
  city: string
  district: string
  organizationId: string
  priceSqr: number
}
// export interface ProductInputType {
//   name: string;
//   constStatus: string;
//   status: string;
//   description: string;
//   location: string;
//   bedNo: number;
//   bathNo: number;
//   isFav: boolean;
//   images: string[];
//   parking: number;
//   releaseDate: number;
//   floors: number;
//   floorNumber: number;
//   city: string;
//   district: string;
//   organizationId: string;
//   price: number;
//   roomNumber: number;
//   sqr: number;
//   priceSqr: number;
// }
export const ListData: ListDataType[] = [
  {
    id: "kjds",
    name: "Орон сууц",
    constStatus: "Шинэ барилга",
    productStatus: "Онцлох",
    address1: "Цагаан7 хороолол Golden Art - Эрдэнэт, Монгол",
    description:
      "Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.",
    roomNumber: 2,
    bedNo: 2,
    bathNo: 1,
    sqr: 37,
    price: 95000000,
    isFav: false,
    images: [
      "https://images.homes.com/listings/214/1007620603-872007331-original.jpg",
      "https://images.homes.com/listings/214/1007620603-872007331-original.jpg",
      "https://images.homes.com/listings/214/1007620603-872007331-original.jpg",
      "https://images.homes.com/listings/214/1007620603-872007331-original.jpg",
    ],
    parking: 2,
    city: "Улаанбаатар",
    district: "Баянзүрх",
    organizationId: " string",
    releaseDate: new Date(),
    floors: 12,
    priceSqr: 1,
    floorNumber: 3,
    highlights: [
      "Ипотекийн зээл боломжтой",
      "Ипотекийн зээл боломжтой",
      "Ипотекийн зээл боломжтой",
      "Ипотекийн зээл боломжтой",
    ],
  },
]
