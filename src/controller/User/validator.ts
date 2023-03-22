import { GENDER, ROL } from '@prisma/client'
import {
  validate,
  IsString,
  IsOptional,
  IsInt,
  IsEnum,
  IsEmail
} from 'class-validator'

export class GET_USER_VALIDATOR {
  @IsString({
    message: 'El id debe ser una string'
  })
    id: string
}
export class CREATE_USER_VALIDATOR {
  @IsString({
    message: 'El nombre debe ser una string'
  })
    name: string

  @IsEmail(
    {},
    {
      message: 'El email debe ser una string'
    }
  )
    email: string

  @IsEnum(ROL, {
    message: 'El rol debe ser STUDENT, TEACHER o ADMIN'
  })
  @IsString({
    message: 'El rol debe ser una string'
  })
    rol: string

  @IsInt({
    message: 'La edad debe ser un numero'
  })
    age: number

  @IsString({
    message: 'El genero debe ser una string'
  })
  @IsEnum(GENDER, {
    message: 'El genero debe ser  MALE,FEMALE,OTHER'
  })
    gender: string

  @IsString({
    message: 'La imagen debe ser una string'
  })
    image: string

  @IsOptional()
  @IsString({
    message: 'El id de la sala debe ser una string'
  })
    roomId: string
}

export class UPDATE_USER_VALIDATOR {
  @IsOptional()
  @IsString({
    message: 'El nombre debe ser una string'
  })
    name: string

  @IsOptional()
  @IsEmail(
    {},
    {
      message: 'El email debe ser una string'
    }
  )
    email: string

  @IsOptional()
  @IsEnum(ROL, {
    message: 'El rol debe ser STUDENT, TEACHER o ADMIN'
  })
  @IsString({
    message: 'El rol debe ser una string'
  })
    rol: string

  @IsOptional()
  @IsInt({
    message: 'La edad debe ser un numero'
  })
    age: number

  @IsOptional()
  @IsString({
    message: 'El genero debe ser una string'
  })
  @IsEnum(GENDER, {
    message: 'El genero debe ser  MALE,FEMALE,OTHER'
  })
    gender: string

  @IsOptional()
  @IsString({
    message: 'El id de la sala debe ser una string'
  })
    roomId: string

  @IsString({
    message: 'El id debe ser una string'
  })
    id: string
}

export { validate }
