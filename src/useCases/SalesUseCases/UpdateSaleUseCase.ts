import { IRegisterSale } from '../../entities/IRegisterSale';
import { IUpdateSaleResponse } from '../../entities/IUpdateSaleReponse';
import { IUpdateSaleRepository } from '../../repositories/SalesRepository/IUpdateSaleRepository';

export class UpdateSaleUseCase {
  constructor(private UpdateSaleRepository: IUpdateSaleRepository) {}
  async execute(sale: Array<IRegisterSale>, id: string): Promise<IUpdateSaleResponse> {
    const updatedSale = await this.UpdateSaleRepository.updateSale(sale, id);
    return updatedSale;
  }
}
