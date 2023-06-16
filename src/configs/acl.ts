import { AbilityBuilder, PureAbility } from '@casl/ability'
import { AuthUserType } from 'src/generated'

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type Subjects = 'all' | 'User' | 'Role' | 'Company'

export enum SubjectsEnum {
  All = 'all',
  User = 'User',
  Role = 'Role',
  Company = 'Company',
  Job = 'Job'
}

export enum ActionsEnum {
  Manage = 'manage',
  Read = 'read',
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type AppAbility = PureAbility<[Actions, Subjects]> | undefined

export const AppAbility = PureAbility as any

export type ACLObj = {
  action: Actions | string
  subject: Subjects | string
  condition?: Record<string, unknown> | null
}
const rolesData = {
  User: {
    can: [
      {
        actions: ['read', 'update', 'delete', 'create'],
        roles: ['ADMIN', 'EDITOR', 'MEMBER']
      }
    ],
    cannot: []
  },
  Job: {
    can: [
      {
        actions: ['read', 'update', 'delete', 'create'],
        roles: ['ADMIN', 'EDITOR', 'MEMBER']
      }
    ],
    cannot: []
  },
  Role: {
    can: [
      {
        actions: ['read'],
        roles: ['ADMIN', 'EDITOR', 'MEMBER']
      },
      {
        actions: ['create', 'update', 'delete'],
        roles: ['ADMIN']
      }
    ],
    cannot: [
      {
        actions: ['create', 'udpate', 'delete'],
        roles: ['MEMBER']
      }
    ]
  },
  NavLink: {
    can: [
      {
        actions: ['read'],
        roles: ['ADMIN', 'EDITOR', 'MEMBER']
      }
    ],
    cannot: []
  }
}

const defineRulesFor = (user: AuthUserType, subject: Subjects) => {
  const { role } = user
  const { can, cannot, rules } = new AbilityBuilder(AppAbility)
  if (user && ['ADMIN', 'EDITOR', 'MEMBER'].includes(role)) {
    Object.entries(rolesData).forEach(([subject, permissions]) => {
      permissions.can.forEach(permission => {
        if (permission.roles.includes(user.role)) {
          permission.actions.forEach(action => {
            can(action, subject)
          })
        }
      })
      permissions.cannot.forEach(permission => {
        if (permission.roles.includes(user.role)) {
          permission.actions.forEach(action => {
            cannot(action, subject)
          })
        }
      })
    })

    return rules
  }

  return rules
}

export const buildAbilityFor = (user: AuthUserType, subject: Subjects): AppAbility => {
  return new AppAbility(defineRulesFor(user, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object!.type
  })
}

export const defaultACLObj: ACLObj = {
  action: 'read',
  subject: 'all'
}

export default defineRulesFor
