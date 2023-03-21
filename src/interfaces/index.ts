import { User, Room, FAMILYRELATION } from '@prisma/client'

export type USER = User
interface USER_TYPE {
  rooms: Room[]
  familyMember: Array<{
    type: FAMILYRELATION
    userMember: {
      name: string | null
    } | null
  }>
}

export type GET_USERS = User | Array<USER_TYPE | null>

export type GET_USER = User | (USER_TYPE | null)
