import { GetAllProductsController } from '../../controllers/ProductsController/GetAllProductsController';
import { GetAllProductsImplementation } from '../../implementations/ProductsImplementations/GetAllProductsImplementation';
import { GetAllProductsUseCase } from '../../useCases/ProductsUseCases/GetAllProductsUseCase';

const getAllProductsImplementation = new GetAllProductsImplementation();
const getAllProductsUseCase = new GetAllProductsUseCase(getAllProductsImplementation);
const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);
export default getAllProductsController;
