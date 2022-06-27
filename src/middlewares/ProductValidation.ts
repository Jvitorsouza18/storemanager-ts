import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

import { IProduct } from '../entities/IProductsEntitiy';
import { NAME_REQUIRED, productSchema, QTY_REQUIRED } from '../joi/productSchema';

class ProductRequestValidation {
  constructor(private schema: ObjectSchema<IProduct>) {}

  validate(req: Request, res: Response, next: NextFunction) {
    const { body: productInformations } = req;

    const { error } = productSchema.validate(productInformations);

    if (!error) return next();

    const { message } = error;

    if (message === NAME_REQUIRED || message === QTY_REQUIRED)
      return res.status(400).json({ message });

    return res.status(422).json({ message });
  }
}

export const productRequestValidation = new ProductRequestValidation(productSchema);
