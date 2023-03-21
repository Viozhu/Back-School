import { PrismaClientValidationError } from '@prisma/client/runtime'
import { ValidationError } from 'class-validator'
import { Response } from 'express'

export const errorHandlerValidator = (
  res: Response,
  errors: ValidationError[]
): void => {
  res.status(500).send({
    success: false,
    status: 500,
    error: errors.map((error: ValidationError) => {
      return {
        property: error.property,
        constraints: error.constraints
      }
    })
  })
}

export const errorHandlerRequest = (
  res: Response,
  err: PrismaClientValidationError
): void => {
  res.status(500).send({
    success: false,
    status: 500,
    error: JSON.parse(
      JSON.stringify(err.message.replaceAll('\n', "'").replaceAll("'", ''))
    )
  })
}
