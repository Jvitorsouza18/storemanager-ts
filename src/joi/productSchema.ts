import Joi, { ObjectSchema } from 'joi';

import { IProduct } from '../entities/IProductsEntitiy';

export const NAME_REQUIRED = '"name" is required';
export const NAME_SHORT = '"name" length must be at least 5 characters long';
export const QTY_REQUIRED = '"quantity" is required';
export const QTY_SHORT = '"quantity" must be greater than or equal to 1';

export const productSchema: ObjectSchema<IProduct> = Joi.object({
  name: Joi.string().required().min(5).messages({
    'any.required': NAME_REQUIRED,
    'string.min': NAME_SHORT,
  }),
  quantity: Joi.number().required().min(1).messages({
    'any.required': QTY_REQUIRED,
    'number.min': QTY_SHORT,
  }),
});
