// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Jobs",
      path: "/",
=======
=======
>>>>>>> caee96b716505309b4d36eeeaf6060189fd862af
      title: "Хянах самбар",
      path: "/admin/jobs",
>>>>>>> caee96b716505309b4d36eeeaf6060189fd862af
      icon: "mdi:home-outline",
      action: "read",
      subject: "Admin_Jobs",
      auth: true,
    },
    {
      title: "Компаниуд",
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
    {
      title: "Миний компани",
      path: "/admin/company",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
    {
      title: "Байгууллага",
      path: "/admin/organization",
      icon: "mdi:shield-outline",
      action: "read",
      subject: "Admin_Roles",
      auth: true,
    },
  ]
}

export default navigation
