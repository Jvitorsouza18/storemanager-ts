import { UpdateSaleController } from '../../controllers/SalesController/UpdateSaleController';
import { UpdateSaleImplementation } from '../../implementations/SalesImplementations/UpdateSaleImplementation';
import { UpdateSaleUseCase } from '../../useCases/SalesUseCases/UpdateSaleUseCase';

const updateSaleImplementation = new UpdateSaleImplementation();
const updateSaleUseCase = new UpdateSaleUseCase(updateSaleImplementation);
export const updateSaleController = new UpdateSaleController(updateSaleUseCase);
