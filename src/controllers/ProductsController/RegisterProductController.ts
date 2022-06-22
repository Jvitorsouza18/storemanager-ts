import { Request, Response } from 'express';

import { RegisterProductUseCase } from '../../useCases/ProductsUseCases/RegisterProductUseCase';
import { CustomError } from '../../utils/CutomError';

export class RegisterProductController {
  constructor(private RegisterProductUseCase: RegisterProductUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const { name, quantity } = request.body;
      const product = { name, quantity };
      const data = await this.RegisterProductUseCase.execute(product);
      return response.status(201).json(data);
    } catch (err) {
      return response
        .status((err as CustomError).status)
        .json({ message: (err as CustomError).message });
    }
  }
}
