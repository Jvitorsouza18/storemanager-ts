import { UpdateProductController } from '../../controllers/ProductsController/UpdateProductController';
import { UpdateProductImplementation } from '../../implementations/ProductsImplementations/UpdateProductImplementation';
import { UpdateProductUseCase } from '../../useCases/ProductsUseCases/UpdateProductUseCase';

const updateProductImplementation = new UpdateProductImplementation();
const updateProductUseCase = new UpdateProductUseCase(updateProductImplementation);

export const updateProductController = new UpdateProductController(updateProductUseCase);
