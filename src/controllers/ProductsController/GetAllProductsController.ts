import { Request, Response } from 'express';

import { GetAllProductsUseCase } from '../../useCases/ProductsUseCases/GetAllProductsUseCase';

export class GetAllProductsController {
  constructor(private getAllProductsUseCase: GetAllProductsUseCase) {}
  async handle(_request: Request, response: Response) {
    const data = await this.getAllProductsUseCase.execute();
    return response.status(200).json(data);
  }
}
