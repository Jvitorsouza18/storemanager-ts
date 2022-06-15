import { ISale } from '../../entities/ISalesEntity';
import { IGetAllSales } from '../../repositories/SalesRepository/IGetAllSales';
import { CustomError } from '../../utils/CutomError';

export class GetAllSalesUseCase {
  constructor(private getAllSalesRepository: IGetAllSales) {}

  async execute(): Promise<ISale[]> {
    const data = await this.getAllSalesRepository.getAllSales();
    if (!data) throw new CustomError(404, 'Sale not found');
    return data;
  }
}
