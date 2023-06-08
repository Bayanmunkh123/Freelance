import { AbilityBuilder, PureAbility } from '@casl/ability'
import { AuthUserType } from 'src/generated'

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type Subjects = 'all' | 'User' | 'Role' | 'Job'

export enum SubjectsEnum {
  All = 'all',
  User = 'User',
  Role = 'Role',
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

const getRolesJson = (user: AuthUserType) => {
  return [
    {
      id: 1,
      name: 'ADMIN',
      permissions: {
        can: [
          {
            action: 'manage',
            subject: 'all'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'EDITOR',
      permissions: {
        can: [
          {
            action: 'manage',
            subject: 'all'
          }
        ]
      }
    },
    {
      id: 3,
      name: 'MEMBER',
      orgRole: 'OWNER',
      permissions: {
        can: [
          {
            action: ['read', 'create', 'update', 'delete'],
            subject: 'User',
            condition: { organizationUsers: { some: { userId: user.id } } }
          },
          {
            action: 'read',
            subject: 'Role'
          },
          {
            action: 'read',
            subject: 'Job'
          }
        ]
      }
    }
  ]
}

const defineRulesFor = (user: AuthUserType, subject: Subjects) => {
  const { role } = user
  const { can, rules } = new AbilityBuilder(AppAbility)

  const jsonData = getRolesJson(user)
  jsonData.forEach(item => {
    if (role === 'ADMIN' && item.name === 'ADMIN') {
      item.permissions.can.forEach(perm => {
        can(perm.action, perm.subject)
      })
    } else if (role === 'EDITOR' && item.name === 'EDITOR') {
      item.permissions.can.forEach(perm => {
        can(perm.action, perm.subject)
      })
    } else if (role === 'MEMBER' && item.name === 'MEMBER') {
      item.permissions.can.forEach(perm => {
        can(perm.action, perm.subject)
      })
    }
  })

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

// if (role === 'ADMIN') {
//   can('manage', 'all')
// } else if (role === 'EDITOR') {
//   can('manage', 'all')
// } else if (role === 'MEMBER') {
//   // can('read', 'User', { organizationUsers: { some: { userId: user.id } } })
//   can(['read', 'create', 'update', 'delete'], subject)

//   // can(['read', 'create', 'update', 'delete'], 'User')
