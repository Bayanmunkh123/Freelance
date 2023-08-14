// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Хянах самбар',
      path: '/admin/dashboard',
      icon: 'mdi:home-outline',
      action: 'read',
      subject: 'Admin_Dashboard',
      auth: true,
    },
    {
      title: 'Компаниуд',
      path: '/admin/users',
      icon: 'mdi-shield',
      action: 'read',
      subject: 'Admin_Users',
      auth: true,
    },
    {
      title: 'Гишүүд',
      path: '/admin/roles',
      icon: 'mdi-human-male-female',
      action: 'read',
      subject: 'Admin_Roles',
      auth: true,
    },
    {
      title: 'Санал хүсэлт',
      path: '/admin/request',
      icon: 'mdi-wechat',
      action: 'read',
      subject: 'Admin_Roles',
      auth: true,
    },
    {
      title: 'Байгууллага',
      path: '/admin/company',
      icon: 'mdi-building',
      action: 'read',
      subject: 'Admin_Roles',
      auth: true,
    },
    {
      title: 'Миний компани',
      path: '/admin/organization',
      icon: 'mdi:building',
      action: 'read',
      subject: 'Admin_Roles',
      auth: true,
    },
    {
      title: 'Product',
      path: '/admin/product',
      icon: 'mdi:shield-outline',
      action: 'read',
      subject: 'Admin_Product',
      auth: true,
    },
    {
    title: 'Хэрэглэгч',
    icon: 'mdi:account-outline',
    path: '/pages/index',
    subject: "User",
    auth: false
    }
  ]
}

export default navigation
