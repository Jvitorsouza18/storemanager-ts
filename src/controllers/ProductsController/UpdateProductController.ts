import { Request, Response } from 'express';

import { UpdateProductUseCase } from '../../useCases/ProductsUseCases/UpdateProductUseCase';
import { CustomError } from '../../utils/CutomError';

export class UpdateProductController {
  constructor(private UpdateProductsUseCase: UpdateProductUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { body } = request;
      const data = await this.UpdateProductsUseCase.execute(id, body);
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
