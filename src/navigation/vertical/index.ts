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
      title: "Миний компани",
      path: "/admin/users",
      icon: "mdi:user-outline",
      action: "read",
      subject: "Admin_Users",
      auth: true,
    },
    {
      title: "Гишүүд",
      path: "/admin/roles",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
    {
      title: "Санал хүсэлт",
      path: "/admin/request",
      icon: "mdi:FrequentlyAskedQuestions-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
  ]
}

export default navigation
