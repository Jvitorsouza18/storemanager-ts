import Joi, { ArraySchema } from 'joi';

export const PRODUCT_ID_REQUIRED = '"productId" is required';
export const QTY_REQUIRED = '"quantity" is required';
export const QTY_MIN = '"quantity" must be greater than or equal to 1';

export const saleSchema: ArraySchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().required().messages({
      'any.required': PRODUCT_ID_REQUIRED,
    }),
    quantity: Joi.number().required().min(1).messages({
      'any.required': QTY_REQUIRED,
      'number.min': QTY_MIN,
    }),
  }),
);
