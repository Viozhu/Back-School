import { FAMILYRELATION, Room, User } from '@prisma/client'

export type USER = User
interface USER_TYPE {
  rooms: Room[]
  familyMember: Array<{
    type: FAMILYRELATION
    userMember: {
      name: string
    }
  }>
}

export type GET_USERS = void | Array<User & USER_TYPE>

export type GET_USER = void | (User & USER_TYPE)
