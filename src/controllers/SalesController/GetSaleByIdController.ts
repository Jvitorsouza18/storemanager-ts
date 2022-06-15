import { Request, Response } from 'express';

import { GetSaleByIdUseCase } from '../../useCases/SalesUseCases/GetSaleByIdUseCase';
import { CustomError } from '../../utils/CutomError';

export class GetSalesByIdController {
  constructor(private GetSaleByIdUseCase: GetSaleByIdUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await this.GetSaleByIdUseCase.execute(Number(id));
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
