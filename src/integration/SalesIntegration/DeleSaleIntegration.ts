import { DeleteSaleController } from '../../controllers/SalesController/DeleteSaleController';
import { DeleteSaleImplementation } from '../../implementations/SalesImplementations/DeleteSaleImplementation';
import { DeleteSaleUseCase } from '../../useCases/SalesUseCases/DeleteSaleUseCase';

const deleteSaleImplementation = new DeleteSaleImplementation();
const deleteSaleUseCase = new DeleteSaleUseCase(deleteSaleImplementation);
export const deleteSaleController = new DeleteSaleController(deleteSaleUseCase);
