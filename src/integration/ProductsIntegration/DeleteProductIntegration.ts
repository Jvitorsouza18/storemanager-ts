import { DeleteProductController } from '../../controllers/ProductsController/DeleteProductController';
import { DeleteProductImplementation } from '../../implementations/ProductsImplementations/DeleteProductImplementation';
import { DeleteProductUseCase } from '../../useCases/ProductsUseCases/DeleteProductUseCase';

const deleteProductImplementation = new DeleteProductImplementation();
const deleteProductUseCase = new DeleteProductUseCase(deleteProductImplementation);
export const deleteProductController = new DeleteProductController(deleteProductUseCase);
