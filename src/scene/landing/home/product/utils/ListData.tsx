export interface ListDataType {
    estateType: string
    estateStatus: string
    status: string
    desc: string
    location: string
    address: string
    roomNo: number
    bedNo: number
    bathNo: number
    area: number
    price: number
    isFav: boolean
    images: string[]
    parking: number
    buildYear: number
    floors: number
    floorNumber: number
    highlights: string[]
  }
export const ListData: ListDataType[] = [
    {
      estateType: 'Орон сууц',
      estateStatus: 'Шинэ барилга',
      status: 'Онцлох',
      location: 'Улаанбаатар хот, Баянзүрх дүүрэг ',
      desc: 'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.',
      address: ' Цагаан7 хороолол Golden Art - Эрдэнэт, Монгол',
      roomNo: 2,
      bedNo: 2,
      bathNo: 1,
      area: 37,
      price: 95000000,
      isFav: false,
      images: ['https://images.homes.com/listings/214/1007620603-872007331-original.jpg', 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg', 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg','https://images.homes.com/listings/214/1007620603-872007331-original.jpg'],
      parking: 2,
      buildYear: 2023,
      floors: 12,
      floorNumber: 3,
      highlights: ['Ипотекийн зээл боломжтой', 'Ипотекийн зээл боломжтой','Ипотекийн зээл боломжтой','Ипотекийн зээл боломжтой']
    }
  ]