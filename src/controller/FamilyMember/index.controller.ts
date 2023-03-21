import { PrismaClient } from '@prisma/client'
import { PrismaClientValidationError } from '@prisma/client/runtime'
import { validate } from 'class-validator'
import { FAMILY_MEMBER, USER } from '../../interfaces'
import {
  errorHandlerRequest,
  errorHandlerValidator,
  successHandler
} from '../../utils'
import { ADD_FAMILY_MEMBER_VALIDATOR } from './validator'

const prisma = new PrismaClient()

export const addFamilyMember = async (req, res): Promise<void> => {
  const { type, userId, familyMemberId } = req.body

  const validateParams = new ADD_FAMILY_MEMBER_VALIDATOR()
  validateParams.userId = userId
  validateParams.type = type
  validateParams.familyMemberId = familyMemberId

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const user: USER[] | null = await prisma.user
        .findMany({
          where: {
            id: {
              in: [Number(userId), Number(familyMemberId)]
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      if (user !== null && user.length < 2) {
        throw new Error('User not found')
      }

      const userMember: FAMILY_MEMBER = await prisma.familyMember
        .create({
          data: {
            type,
            userMember: {
              connect: {
                id: Number(userId)
              }
            },
            familyMember: {
              connect: {
                id: Number(familyMemberId)
              }
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      const familyMember: FAMILY_MEMBER = await prisma.familyMember
        .create({
          data: {
            type,
            userMember: {
              connect: {
                id: Number(familyMemberId)
              }
            },
            familyMember: {
              connect: {
                id: Number(userId)
              }
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      console.log(familyMember)
      return successHandler<FAMILY_MEMBER>(res, userMember, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const deleteFamilyMember = async (req, res): Promise<void> => {
  const { id } = req.params

  if (id === undefined) {
    throw new Error('Id is required')
  }
  try {
    const userMember: FAMILY_MEMBER = await prisma.familyMember
      .delete({
        where: {
          id: Number(id)
        }
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message)
      })

    return successHandler<FAMILY_MEMBER>(res, userMember, 'Successful')
  } catch (err) {
    errorHandlerRequest(res, err)
  }
}
