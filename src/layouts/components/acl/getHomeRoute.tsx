const getHomeRoute = (role: string | undefined) => {
  if (role === "ADMIN" || role === "EDITOR" || role === "MEMBER")
    return '/'
  else return "/"
}

export default getHomeRoute
