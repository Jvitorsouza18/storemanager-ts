import { Request, Response } from 'express';

import { GetAllSalesUseCase } from '../../useCases/SalesUseCases/GetAllSalesUseCase';

export class GetAllSalesController {
  constructor(private getAllSalesUseCase: GetAllSalesUseCase) {}
  async handle(_request: Request, response: Response) {
    const data = await this.getAllSalesUseCase.execute();
    return response.status(200).json(data);
  }
}
