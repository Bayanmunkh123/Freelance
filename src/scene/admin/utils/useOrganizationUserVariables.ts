import { useRouter } from 'next/router'
import { OrganizationUserRoleEnum, OrganizationUsersWhereInput } from 'src/generated'

export const useOrganizationUserVariables = () => {
  const { query } = useRouter()
  const where = {} as OrganizationUsersWhereInput
  console.log(query?.role?.toString())
  if (query.role) where.orgRole = query?.role?.toString() as OrganizationUserRoleEnum

  return {
    input: where,
    orderBy: query?.orderBy?.toString(),
    take: +(query?.take || 10),
    skip: +(query?.skip || 0)
  }
}