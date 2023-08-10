// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Jobs",
      path: "/admin/jobs",
      icon: "mdi:home-outline",
      action: "read",
      subject: "Admin_Jobs",
      auth: false,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "mdi:user-outline",
      action: "read",
      subject: "Admin_Users",
      auth: false,
    },
    {
      title: "Roles",
      path: "/admin/roles",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: false,
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
