// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Jobs',
      path: '/admin/jobs',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Users',
      path: '/admin/users',
      icon: 'mdi:user-outline'
    },
    {
      title: 'Roles',
      path: '/admin/roles',
      icon: 'mdi:shield-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
