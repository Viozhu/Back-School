import { FAMILYRELATION } from '@prisma/client'
import { IsEnum, IsString } from 'class-validator'

export class ADD_FAMILY_MEMBER_VALIDATOR {
  @IsString({
    message: 'El userId debe ser una string'
  })
    userId: string

  @IsString({
    message: 'El familyMemberId debe ser una string'
  })
    familyMemberId: string

  @IsEnum(FAMILYRELATION, {
    message:
      'El type debe ser FATHER,MOTHER,BROTHER,SISTER,GRANDFATHER,GRANDMOTHER,GRANDSON,GRANDDAUGHTER,AUNT,UNCLE,COUSIN,NEPHEW,NIECE,FRIEND,OTHER'
  })
  @IsString({
    message: 'El rol debe ser una string'
  })
    type: string
}
