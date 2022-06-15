import { ISaleById } from '../../entities/ISaleEntityById';
import { IGetSalesByID } from '../../repositories/SalesRepository/IGetAllSalesById';
import { CustomError } from '../../utils/CutomError';

export class GetSaleByIdUseCase {
  constructor(private getAllSalesRepository: IGetSalesByID) {}

  async execute(id: number): Promise<ISaleById[]> {
    const data = await this.getAllSalesRepository.getSalesById(id);
    if (data.length === 0) throw new CustomError(404, 'Sale not found');
    return data;
  }
}
