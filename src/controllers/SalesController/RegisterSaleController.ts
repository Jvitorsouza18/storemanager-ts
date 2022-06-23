import { Request, Response } from 'express';

import { RegisterSaleUseCase } from '../../useCases/SalesUseCases/RegisterSaleUseCase';
import { CustomError } from '../../utils/CutomError';

export class RegisterSaleController {
  constructor(private RegisterSaleUseCase: RegisterSaleUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { body } = request;
      const saleResponse = body;
      const data = await this.RegisterSaleUseCase.execute(saleResponse);
      return response.status(201).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
