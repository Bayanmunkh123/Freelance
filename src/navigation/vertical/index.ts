// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Хянах самбар",
      path: "/admin/jobs",
      icon: "mdi:home-outline",
      action: "read",
      subject: "Admin_Jobs",
      auth: true,
    },
    {
      title: "Компаниуд",
      path: "/admin/users",
      icon: "mdi-building",
      action: "read",
      subject: "Admin_Users",
      auth: true,
    },
    {
      title: "Гишүүд",
      path: "/admin/roles",
      icon: "mdi-human-male-female",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
    {
      title: "Санал хүсэлт",
      path: "/admin/request",
      icon: "mdi-wechat",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
    {
      title: "Миний компани",
      path: "/admin/company",
      icon: "mdi-building",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
    {
      title: "Байгууллага",
      path: "/admin/organization",
      icon: "mdi:account",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
  ]
}

export default navigation
