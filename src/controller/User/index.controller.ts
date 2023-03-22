import { PrismaClient } from '@prisma/client'
import { PrismaClientValidationError } from '@prisma/client/runtime'
import { validate } from 'class-validator'

import {
  errorHandlerRequest,
  errorHandlerValidator,
  successHandler
} from '../../utils'
import { GET_USER, GET_USERS, USER } from '../../interfaces'
import {
  CREATE_USER_VALIDATOR,
  GET_USER_VALIDATOR,
  UPDATE_USER_VALIDATOR
} from './validator'
const prisma = new PrismaClient()

export const getUsers = async (req, res): Promise<void> => {
  try {
    const Users: GET_USERS = await prisma.user
      .findMany({
        include: {
          rooms: true,
          familyMember: {
            select: {
              id: true,
              type: true,
              userMember: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message)
      })

    return successHandler<GET_USERS>(res, Users, 'Successful')
  } catch (err) {
    errorHandlerRequest(res, err)
  }
}

export const getUser = async (req, res): Promise<void> => {
  const { id } = req.params

  const validateParams = new GET_USER_VALIDATOR()
  validateParams.id = id

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const User: GET_USER = await prisma.user
        .findUnique({
          where: {
            id: parseInt(id)
          },
          include: {
            rooms: true,
            familyMember: {
              select: {
                id: true,
                type: true,
                userMember: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })
      return successHandler<GET_USER>(res, User, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const createUser = async (req, res): Promise<void> => {
  const { name, email, rol, age, gender, roomId } = req.body

  const validateParams = new CREATE_USER_VALIDATOR()
  validateParams.name = name
  validateParams.email = email
  validateParams.rol = rol
  validateParams.age = age
  validateParams.gender = gender
  validateParams.roomId = roomId

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const User: USER = await prisma.user
        .create({
          data: {
            name,
            email,
            rol,
            age,
            gender,
            ...(roomId !== undefined && {
              rooms: {
                connect: {
                  id: roomId
                }
              }
            })
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      return successHandler<USER>(res, User, 'Successful created')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const updateUser = async (req, res): Promise<void> => {
  const { id, name, email, rol, age, gender, roomId } = req.body

  const validateParams = new UPDATE_USER_VALIDATOR()
  validateParams.id = id
  validateParams.name = name
  validateParams.email = email
  validateParams.rol = rol
  validateParams.age = age
  validateParams.gender = gender
  validateParams.roomId = roomId

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const User: USER = await prisma.user
        .update({
          where: {
            id: parseInt(id)
          },
          data: {
            name,
            email,
            rol,
            age,
            gender,
            ...(roomId !== null && {
              rooms: {
                connect: {
                  id: roomId
                }
              }
            })
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      return successHandler<USER>(res, User, 'Successful updated')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const deleteUser = async (req, res): Promise<void> => {
  const { id } = req.params

  const validateParams = new GET_USER_VALIDATOR()
  validateParams.id = id

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const User: USER = await prisma.user
        .delete({
          where: {
            id: parseInt(id)
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      return successHandler(res, User, 'Successful deleted')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}
