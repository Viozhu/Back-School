import { FAMILYRELATION, Room, User } from '@prisma/client';

export type USER = User;
type USER_TYPE = {
  rooms: Room[];
  familyMember: {
    type: FAMILYRELATION;
    userMember: {
      name: string;
    };
  }[];
};

export type GET_USERS = void | (User & USER_TYPE)[];

export type GET_USER = void | (User & USER_TYPE);
