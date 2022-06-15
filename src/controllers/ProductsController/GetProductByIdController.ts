import { Request, Response } from 'express';

import { GetProductByIdUseCase } from '../../useCases/ProductsUseCases/GetProductByIdUseCase';
import { CustomError } from '../../utils/CutomError';

export class GetProductByIdController {
  constructor(private GetProductByIdUseCase: GetProductByIdUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await this.GetProductByIdUseCase.execute(Number(id));
      return response.status(200).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
