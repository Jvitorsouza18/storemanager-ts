import { GetSalesByIdController } from '../../controllers/SalesController/GetSaleByIdController';
import { GetSaleByIdImplementation } from '../../implementations/SalesImplementations/GetSaleByIdImplementation';
import { GetSaleByIdUseCase } from '../../useCases/SalesUseCases/GetSaleByIdUseCase';

const getSaleByIdImplmentation = new GetSaleByIdImplementation();
const getSaleByIdUseCase = new GetSaleByIdUseCase(getSaleByIdImplmentation);
export const getSaleByIdController = new GetSalesByIdController(getSaleByIdUseCase);
