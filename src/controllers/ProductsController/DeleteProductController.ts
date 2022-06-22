import { Request, Response } from 'express';

import { DeleteProductUseCase } from '../../useCases/ProductsUseCases/DeleteProductUseCase';
import { CustomError } from '../../utils/CutomError';

export class DeleteProductController {
  constructor(private DeleleteProductUseCase: DeleteProductUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.DeleleteProductUseCase.execute(id);
      return response.status(204).end();
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
