import { AbilityBuilder, PureAbility } from "@casl/ability"
import { AuthUserType } from "src/generated"
import { adminJobsPermission } from "src/pages/admin/jobs"
import { adminRolesPermission } from "src/pages/admin/roles"
import { adminUsersPermission } from "src/pages/admin/users"

export type Actions = "manage" | "create" | "read" | "update" | "delete"

export type Subjects = "all" | "Admin_Roles" | "Admin_Jobs" | "Admin_Users"

export type Roles = "ADMIN" | "EDITOR" | "MEMBER"

export type OrgRoles =
  | "OWNER"
  | "EDITOR"
  | "FINANCE"
  | "SALES"
  | "SUPPORT"
  | "VIEWER"
export enum SubjectsEnum {
  All = "all",
  User = "User",
  Role = "Role",
  Company = "Company",
  Job = "Job",
}

export enum ActionsEnum {
  Manage = "manage",
  Read = "read",
  Create = "create",
  Delete = "delete",
  Update = "update",
}

export type CanType = {
  actions: Actions[]
  roles: Roles[]
  orgRoles?: OrgRoles[] | null
}

export type RoleDataType = {
  can: CanType[]
  cannot: CanType[]
}

export type RoleData = Partial<Record<any, RoleDataType>>

export type AppAbility = PureAbility<[Actions, Subjects]> | undefined

export const AppAbility = PureAbility as any

export type ACLObj = {
  action: Actions
  subject: Subjects
  condition?: Record<string, unknown> | null
}
const rolesData: RoleData = {
  // Admin
  ...adminJobsPermission,
  ...adminRolesPermission,
  ...adminUsersPermission,

  // Landing

  // Item
}

// const rolesData = {
//   User: {
//     can: [
//       {
//         actions: ['read', 'update', 'delete', 'create'],
//         roles: ['ADMIN', 'EDITOR', 'MEMBER']
//       }
//     ],
//     cannot: []
//   },
//   Job: {
//     can: [
//       {
//         actions: ['read', 'update', 'delete', 'create'],
//         roles: ['ADMIN', 'EDITOR', 'MEMBER']
//       }
//     ],
//     cannot: []
//   },
//   Role: {
//     can: [
//       {
//         actions: ['read'],
//         roles: ['ADMIN', 'EDITOR', 'MEMBER']
//       },
//       {
//         actions: ['create', 'update', 'delete'],
//         roles: ['ADMIN']
//       }
//     ],
//     cannot: [
//       {
//         actions: ['create', 'udpate', 'delete'],
//         roles: ['MEMBER']
//       }
//     ]
//   },
//   NavLink: {
//     can: [
//       {
//         actions: ['read'],
//         roles: ['ADMIN', 'EDITOR', 'MEMBER']
//       }
//     ],
//     cannot: []
//   }
// }

// const defineRulesFor = (user: AuthUserType, subject: Subjects) => {
//   const { role } = user
//   const { can, cannot, rules } = new AbilityBuilder(AppAbility)
//   if (user && ['ADMIN', 'EDITOR', 'MEMBER'].includes(role)) {
//     Object.entries(rolesData).forEach(([subject, permissions]) => {
//       permissions.can.forEach(permission => {
//         if (permission.roles.includes(user.role)) {
//           permission.actions.forEach(action => {
//             can(action, subject)
//           })
//         }
//       })
//       permissions.cannot.forEach(permission => {
//         if (permission.roles.includes(user.role)) {
//           permission.actions.forEach(action => {
//             cannot(action, subject)
//           })
//         }
//       })
//     })

//     return rules
//   }

//   return rules
// }

const defineRulesFor = (user: AuthUserType) => {
  const { can, cannot, rules } = new AbilityBuilder(AppAbility)

  for (const subject in rolesData) {
    const permissions: any = rolesData[subject]
    for (const permission of permissions.can) {
      if (
        permission.roles.includes(user.role) &&
        (!permission.orgRoles ||
          (user.role === "MEMBER" && user.organizationUsers?.length === 0) ||
          (user.role === "MEMBER" &&
            permission.orgRoles &&
            user.organizationUsers?.some((organizationUser) =>
              permission.orgRoles?.includes(organizationUser.orgRole),
            )))
      ) {
        for (const action of permission.actions) {
          can(action, subject)
        }
      }
    }
    for (const permission of permissions.cannot) {
      if (
        permission.roles.includes(user.role) &&
        (!permission.orgRoles ||
          (user.role === "MEMBER" && !user.organizationUsers) ||
          (user.role === "MEMBER" &&
            permission.orgRoles &&
            user.organizationUsers?.some((organizationUser) =>
              permission.orgRoles?.includes(organizationUser.orgRole),
            )))
      ) {
        for (const action of permission.actions) {
          cannot(action, subject)
        }
      }
    }
  }

  return rules
}

export const buildAbilityFor = (user: AuthUserType): AppAbility => {
  return new AppAbility(defineRulesFor(user), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    detectSubjectType: (object: any) => object!.type,
  })
}

// export const buildAbilityFor = (user: AuthUserType, subject: Subjects): AppAbility => {
//   return new AppAbility(defineRulesFor(user, subject), {
//     // https://casl.js.org/v5/en/guide/subject-type-detection
//     // @ts-ignore
//     detectSubjectType: object => object!.type
//   })
// }

export const defaultACLObj: ACLObj = {
  action: "read",
  subject: "all",
}

export default defineRulesFor
