import { GetAllSalesController } from '../../controllers/SalesController/GetAllSalesController';
import { GetAllSalesImplementation } from '../../implementations/SalesImplementations/GetAllSalesImplementation';
import { GetAllSalesUseCase } from '../../useCases/SalesUseCases/GetAllSalesUseCase';

const getAllSalesImplementation = new GetAllSalesImplementation();
const getAllSalesUseCase = new GetAllSalesUseCase(getAllSalesImplementation);
const getAllSalesController = new GetAllSalesController(getAllSalesUseCase);
export default getAllSalesController;
