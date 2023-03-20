export const successHandler = (res: any, data: any, message: string) => {
  res.status(200).send({
    success: true,
    status: 200,
    message,
    data,
  });
};
