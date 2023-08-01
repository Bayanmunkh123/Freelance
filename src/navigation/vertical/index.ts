// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Jobs",
      path: "/admin/jobs",
      icon: "mdi:home-outline",
      action: "read",
      subject: "Job",
      auth: true,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: "mdi:user-outline",
      action: "read",
      subject: "User",
      auth: true,
    },
    {
      title: "Roles",
      path: "/admin/roles",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Role",
      auth: true,
    },
  ]
}

export default navigation
