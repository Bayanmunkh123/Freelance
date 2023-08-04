const getHomeRoute = (role: string | undefined) => {
  if (role === "ADMIN" || role === "EDITOR" || role === "MEMBER")
    return '/admin/jobs'
  else return "/"
}

export default getHomeRoute
