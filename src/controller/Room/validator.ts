import { DAY } from '@prisma/client'
import { IsArray, IsEnum, IsInt, IsOptional, IsString } from 'class-validator'

export class STUDENTS_TO_ROOM_VALIDATOR {
  @IsInt({ message: 'Room id is not valid' })
    id: number

  @IsArray({ message: 'Student must to be array' })
    students: number[]
}

export class ADD_ROOM_VALIDATOR {
  @IsString({ message: 'Name is not valid' })
    name: string

  @IsString({ message: 'Content is not valid' })
    content: string

  @IsEnum(DAY, { message: 'Day is not valid' })
  @IsString()
    day: string

  @IsString({ message: 'Time is not valid, valid type:   10:00' })
    time: string

  @IsInt({ message: 'Capacity is not valid' })
    capacity: number
}

export class UPDATE_ROOM_VALIDATOR {
  @IsOptional()
  @IsString({ message: 'Name is not valid' })
    name?: string

  @IsOptional()
  @IsString({ message: 'Content is not valid' })
    content?: string

  @IsOptional()
  @IsEnum(DAY, { message: 'Day is not valid' })
  @IsString()
    day?: string

  @IsOptional()
  @IsString({ message: 'Time is not valid, valid type:   10:00' })
    time?: string

  @IsOptional()
  @IsInt({ message: 'Capacity is not valid' })
    capacity?: number
}
