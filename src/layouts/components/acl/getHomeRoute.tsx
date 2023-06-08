const getHomeRoute = (role: string) => {
  if (role === 'ADMIN' || role === 'EDITOR' || role === 'MEMBER') return '/admin/jobs'
  else return '/'
}

export default getHomeRoute
