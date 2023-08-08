// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Jobs",
      path: "/",
      icon: "mdi:home-outline",
      action: "read",
      subject: "Admin_Jobs",
      auth: true,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "mdi:user-outline",
      action: "read",
      subject: "Admin_Users",
      auth: true,
    },
    {
      title: "Roles",
      path: "/admin/roles",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
  ]
}

export default navigation
