import { NextFunction, Request, Response } from 'express';
import { ArraySchema } from 'joi';

import { saleSchema, QTY_REQUIRED, PRODUCT_ID_REQUIRED } from '../joi/saleSchema';

class SaleRequestValidation {
  constructor(private schema: ArraySchema) {}

  validate(req: Request, res: Response, next: NextFunction) {
    const { body: saleInformations } = req;

    const { error } = saleSchema.validate(saleInformations);

    if (!error) return next();

    const { message } = error;

    if (message === PRODUCT_ID_REQUIRED || message === QTY_REQUIRED)
      return res.status(400).json({ message });

    return res.status(422).json({ message });
  }
}

export const saleRequestValidation = new SaleRequestValidation(saleSchema);
