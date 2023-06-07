/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = (role: string) => {
  if (role === 'ADMIN' || role === 'EDITOR' || role === 'MEMBER') return '/admin/jobs'
  else return '/'
}

export default getHomeRoute
