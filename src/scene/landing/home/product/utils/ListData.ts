export interface ListDataType {
    name: string
    constStatus: string
    status: string
    description: string
    location: string
    address: string
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
  }
export interface ProductInputType {
    name: string
    constStatus: string
    status: string
    description: string
    location: string
    bedNo: number
    bathNo: number
    isFav: boolean
    images: string[]
    parking: number
    releaseDate: number
    floors: number
    floorNumber: number
    city: string
    district: string
    organizationId: string
    price: number
    roomNumber: number
    sqr: number
    priceSqr: number
}
export const ListData: ListDataType[] = [
    {
      name: 'Орон сууц',
      constStatus: 'Шинэ барилга',
      status: 'Онцлох',
      location: 'Цагаан7 хороолол Golden Art - Эрдэнэт, Монгол',
      description: 'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.',
      roomNumber: 2,
      bedNo: 2,
      bathNo: 1,
      sqr: 37,
      price: 95000000,
      isFav: false,
      images: ['https://images.homes.com/listings/214/1007620603-872007331-original.jpg', 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg', 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg','https://images.homes.com/listings/214/1007620603-872007331-original.jpg'],
      parking: 2,
      city: 'Улаанбаатар',
      district: 'Баянзүрх',
      organizationId:' string',
      releaseDate: 2023,
      floors: 12,
      priceSqr: 1,
      floorNumber: 3,
      highlights: ['Ипотекийн зээл боломжтой', 'Ипотекийн зээл боломжтой','Ипотекийн зээл боломжтой','Ипотекийн зээл боломжтой']
    }
  ]