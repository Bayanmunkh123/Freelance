// ** Type import
import { VerticalNavItemsType } from "src/@core/layouts/types"

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Мэдээлэл үүсгэх",
      path: "/admin/product/register",
      icon: "bi:house-add-fill",
      action: "read",
      subject: "Admin_Product",
      auth: true,
    },
    {
      title: "Хянах самбар",
      path: "/admin/dashboard",
      icon: "mdi:home-outline",
      action: "read",
      subject: "Admin_Dashboard",
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
      title: "Мэдээлэл",
      path: "/admin/product",
      icon: "mdi:chart-ppf",
      action: "read",
      subject: "Admin_Product",
      auth: true,
    },
    {
      title: "Хэрэглэгч",
      path: "/admin/orgusers",
      icon: "mdi:account-outline",
      action: "read",
      subject: "Admin_Users",
      auth: true,
    },
  ]
}

export default navigation
