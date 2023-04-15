// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: 'Нээлттэй ажлын зар',
      path: '/home',
      auth: false
    },
    {
      title: 'Ажил олгогч',
      path: '/company',
      auth: false
    },
    {
      title: 'Ажил хайгч',
      path: '/staff',
      auth: false
    }
  ]
}

export default navigation
