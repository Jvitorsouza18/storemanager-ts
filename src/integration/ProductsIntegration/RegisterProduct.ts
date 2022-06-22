import { RegisterProductController } from '../../controllers/ProductsController/RegisterProductController';
import { RegisterProductImplementation } from '../../implementations/ProductsImplementations/RegisterProduct.Implementation';
import { RegisterProductUseCase } from '../../useCases/ProductsUseCases/RegisterProductUseCase';

const registerProductImplmentation = new RegisterProductImplementation();
const registerProductUseCase = new RegisterProductUseCase(registerProductImplmentation);

export const registerProductController = new RegisterProductController(
  registerProductUseCase,
);
