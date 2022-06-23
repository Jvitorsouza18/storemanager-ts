import { Request, Response } from 'express';

import { UpdateSaleUseCase } from '../../useCases/SalesUseCases/UpdateSaleUseCase';
import { CustomError } from '../../utils/CutomError';

export class UpdateSaleController {
  constructor(private UpdateSaleUseCase: UpdateSaleUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { body } = request;
      const { id } = request.params;
      const saleResponse = body;
      const data = await this.UpdateSaleUseCase.execute(saleResponse, id);
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
