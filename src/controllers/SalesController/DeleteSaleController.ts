import { Request, Response } from 'express';

import { DeleteSaleUseCase } from '../../useCases/SalesUseCases/DeleteSaleUseCase';
import { CustomError } from '../../utils/CutomError';

export class DeleteSaleController {
  constructor(private DeleteSaleUseCase: DeleteSaleUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await this.DeleteSaleUseCase.execute(id);
      return response.status(204).end();
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
