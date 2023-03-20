import { PrismaClient } from '@prisma/client';
import { PrismaClientValidationError } from '@prisma/client/runtime';
import { validate } from 'class-validator';
import { RequestHandler } from 'express';
import {
  errorHandlerRequest,
  errorHandlerValidator,
  successHandler,
} from '../../utils';
import { GET_USER, GET_USERS, USER } from '../../interfaces';
import {
  CREATE_USER_VALIDATOR,
  GET_USER_VALIDATOR,
  UPDATE_USER_VALIDATOR,
} from './validator';
const prisma = new PrismaClient();

export const getUsers = async (req, res): RequestHandler => {
  try {
    const Users: GET_USERS = await prisma.user
      .findMany({
        include: {
          rooms: true,
          familyMember: {
            select: {
              type: true,
              userMember: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message);
      });

    return successHandler(res, Users, 'Successful');
  } catch (err) {
    errorHandlerRequest(res, err);
  }
};

export const getUser = async (req, res): RequestHandler => {
  const { id } = req.params;

  const validateParams = new GET_USER_VALIDATOR();
  validateParams.id = id;

  validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors);
    } else {
      sendResponse();
    }
  });

  const sendResponse = async () => {
    try {
      const User: GET_USER = await prisma.user
        .findUnique({
          where: {
            id: parseInt(id),
          },
          include: {
            rooms: true,
            familyMember: {
              select: {
                type: true,
                userMember: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message);
        });
      return successHandler(res, User, 'Successful');
    } catch (err) {
      errorHandlerRequest(res, err);
    }
  };
};

export const createUser = async (req, res): RequestHandler => {
  const { name, email, rol, age, gender, roomId } = req.body;

  const validateParams = new CREATE_USER_VALIDATOR();
  validateParams.name = name;
  validateParams.email = email;
  validateParams.rol = rol;
  validateParams.age = age;
  validateParams.gender = gender;
  validateParams.roomId = roomId;

  validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors);
    } else {
      sendResponse();
    }
  });

  const sendResponse = async () => {
    try {
      const User: USER = await prisma.user
        .create({
          data: {
            name,
            email,
            rol,
            age,
            gender,
            ...(roomId && {
              rooms: {
                connect: {
                  id: roomId,
                },
              },
            }),
          },
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message);
        });

      return successHandler(res, User, 'Successful created');
    } catch (err) {
      errorHandlerRequest(res, err);
    }
  };
};

export const updateUser = async (req, res): RequestHandler => {
  const { id, name, email, rol, age, gender, roomId } = req.body;

  const validateParams = new UPDATE_USER_VALIDATOR();
  validateParams.id = id;
  validateParams.name = name;
  validateParams.email = email;
  validateParams.rol = rol;
  validateParams.age = age;
  validateParams.gender = gender;
  validateParams.roomId = roomId;

  validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors);
    } else {
      sendResponse();
    }
  });

  const sendResponse = async () => {
    try {
      const User: USER = await prisma.user
        .update({
          where: {
            id: parseInt(id),
          },
          data: {
            name,
            email,
            rol,
            age,
            gender,
            ...(roomId && {
              rooms: {
                connect: {
                  id: roomId,
                },
              },
            }),
          },
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message);
        });

      return successHandler(res, User, 'Successful updated');
    } catch (err) {
      errorHandlerRequest(res, err);
    }
  };
};

export const deleteUser = async (req, res): RequestHandler => {
  const { id } = req.params;

  const validateParams = new GET_USER_VALIDATOR();
  validateParams.id = id;

  validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors);
    } else {
      sendResponse();
    }
  });

  const sendResponse = async () => {
    try {
      const User: USER = await prisma.user
        .delete({
          where: {
            id: parseInt(id),
          },
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message);
        });

      return successHandler(res, User, 'Successful deleted');
    } catch (err) {
      errorHandlerRequest(res, err);
    }
  };
};