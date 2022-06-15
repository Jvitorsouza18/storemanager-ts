import { GetProductByIdController } from '../../controllers/ProductsController/GetProductByIdController';
import { GetProductByIdImplementation } from '../../implementations/ProductsImplementations/GetProductByIdImplementation';
import { GetProductByIdUseCase } from '../../useCases/ProductsUseCases/GetProductByIdUseCase';

const getProductByIdImplementation = new GetProductByIdImplementation();
const getProductByIdUseCase = new GetProductByIdUseCase(getProductByIdImplementation);
export const getProductByIdController = new GetProductByIdController(
  getProductByIdUseCase,
);
