import { Response } from 'express'
export const successHandler = <TData>(
  res: Response,
  data: TData,
  message: string
): void => {
  res.status(200).send({
    success: true,
    status: 200,
    message,
    data
  })
}
