// ** Type import
import { HorizontalNavItemsType } from "src/@core/layouts/types"

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: "Ажил",
      path: "/admin/jobs",
      action: "read",
      subject: "NavLink",
      auth: true,
    },
    {
      title: "Хэрэглэгчид",
      path: "/admin/users",
      action: "read",
      subject: "NavLink",
      auth: true,
    },
    {
      title: "Roles",
      path: "/admin/roles",
      action: "read",
      subject: "NavLink",
      auth: true,
    },
    {
      title: "Product",
      path: "/product",
      action: "read",
      subject: "Product",
      auth: false,
    },
    {
      title: "Service",
      path: "/service",
      action: "read",
      subject: "Service",
      auth: false,
    },
    {
      title: "About",
      path: "/about-us",
      action: "read",
      subject: "About",
      auth: false,
    },
  ]
}

export default navigation
