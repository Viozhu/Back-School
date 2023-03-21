import { PrismaClient } from '@prisma/client'
import { PrismaClientValidationError } from '@prisma/client/runtime'
import { validate } from 'class-validator'

import { ROOM } from '../../interfaces'
import {
  errorHandlerRequest,
  errorHandlerValidator,
  successHandler
} from '../../utils'
import {
  ADD_ROOM_VALIDATOR,
  STUDENTS_TO_ROOM_VALIDATOR,
  UPDATE_ROOM_VALIDATOR
} from './validator'

const prisma = new PrismaClient()

export const getRooms = async (req, res): Promise<void> => {
  try {
    const Rooms: ROOM[] = await prisma.room
      .findMany({
        include: {
          students: true
        }
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message)
      })

    return successHandler<ROOM[]>(res, Rooms, 'Successful')
  } catch (err) {
    errorHandlerRequest(res, err)
  }
}

export const getRoom = async (req, res): Promise<void> => {
  try {
    const { id } = req.params

    const Room: ROOM | null = await prisma.room
      .findUnique({
        where: {
          id: Number(id)
        },
        include: {
          students: true
        }
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message)
      })

    if (Room === null) {
      throw new Error('Room not found')
    }

    return successHandler<ROOM>(res, Room, 'Successful')
  } catch (err) {
    errorHandlerRequest(res, err)
  }
}

export const createRoom = async (req, res): Promise<void> => {
  const { name, content, day, time, capacity } = req.body

  const validateParams = new ADD_ROOM_VALIDATOR()
  validateParams.name = name
  validateParams.content = content
  validateParams.day = day
  validateParams.time = time
  validateParams.capacity = capacity

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const Room: ROOM = await prisma.room
        .create({
          data: {
            name,
            content,
            day,
            time,
            capacity
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      return successHandler<ROOM>(res, Room, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const updateRoom = async (req, res): Promise<void> => {
  const { id, name, content, day, time, capacity } = req.body

  const validateParams = new UPDATE_ROOM_VALIDATOR()
  validateParams.name = name
  validateParams.content = content
  validateParams.day = day
  validateParams.time = time
  validateParams.capacity = capacity

  void validate(validateParams).then((errors) => {
    if (errors.length > 0) {
      errorHandlerValidator(res, errors)
    } else {
      void sendResponse()
    }
  })

  const sendResponse = async (): Promise<void> => {
    try {
      const Room: ROOM | null = await prisma.room
        .update({
          where: {
            id: Number(id)
          },
          data: {
            name,
            content,
            day,
            time,
            capacity
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      if (Room === null) {
        throw new Error('Room not found')
      }

      return successHandler<ROOM>(res, Room, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const deleteRoom = async (req, res): Promise<void> => {
  try {
    const { id } = req.params

    const Room: ROOM | null = await prisma.room
      .delete({
        where: {
          id: Number(id)
        }
      })
      .catch((err: PrismaClientValidationError) => {
        throw new Error(err.message)
      })

    if (Room === null) {
      throw new Error('Room not found')
    }

    return successHandler<ROOM>(res, Room, 'Successful')
  } catch (err) {
    errorHandlerRequest(res, err)
  }
}

export const addStudentsToRoom = async (req, res): Promise<void> => {
  const { id, students } = req.body

  const validateParams = new STUDENTS_TO_ROOM_VALIDATOR()
  validateParams.students = students
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
      const Room: ROOM | null = await prisma.room
        .update({
          where: {
            id: Number(id)
          },
          data: {
            students: {
              connect: students.map((student) => ({
                id: Number(student)
              }))
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      if (Room === null) {
        throw new Error('Room not found')
      }

      return successHandler<ROOM>(res, Room, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}

export const deleteStudentsToRoom = async (req, res): Promise<void> => {
  const { id, students } = req.body

  const validateParams = new STUDENTS_TO_ROOM_VALIDATOR()
  validateParams.students = students
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
      const Room: ROOM | null = await prisma.room
        .update({
          where: {
            id: Number(id)
          },
          data: {
            students: {
              disconnect: students.map((student) => ({
                id: Number(student)
              }))
            }
          }
        })
        .catch((err: PrismaClientValidationError) => {
          throw new Error(err.message)
        })

      if (Room === null) {
        throw new Error('Room not found')
      }

      return successHandler<ROOM>(res, Room, 'Successful')
    } catch (err) {
      errorHandlerRequest(res, err)
    }
  }
}
