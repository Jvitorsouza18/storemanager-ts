import { RegisterSaleController } from '../../controllers/SalesController/RegisterSaleController';
import { RegisterSaleImpplementation } from '../../implementations/SalesImplementations/RegisterSaleImplementation';
import { RegisterSaleUseCase } from '../../useCases/SalesUseCases/RegisterSaleUseCase';

const registerSaleImplementation = new RegisterSaleImpplementation();
const registerSaleUseCase = new RegisterSaleUseCase(registerSaleImplementation);
export const registerSaleController = new RegisterSaleController(registerSaleUseCase);
