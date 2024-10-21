import createHttpErrors from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    const result = schema.validate(req.body, { abortEarly: false });

    if (result.error) {
      const errorMessages = result.error.details
        .map((err) => err.message)
        .join(', ');
      return next(createHttpErrors(400, errorMessages));
    }
    next();
  } catch (error) {
    next(error);
  }
};
