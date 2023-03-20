export const errorHandlerValidator = (res: any, errors: any) => {
  res.status(500).send({
    success: false,
    status: 500,
    error: errors.map((error: any) => {
      return {
        property: error.property,
        constraints: error.constraints,
      };
    }),
  });
};

export const errorHandlerRequest = (res: any, err: any) => {
  res.status(500).send({
    success: false,
    status: 500,
    error: JSON.parse(
      JSON.stringify(err.message.replaceAll('\n', "'").replaceAll("'", '')),
    ),
  });
};
