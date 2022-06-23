import { IRegisterSale } from '../../entities/IRegisterSale';
import { IResponseSale } from '../../entities/IResponseSale';
import { IRegisterSaleRepository } from '../../repositories/SalesRepository/IRegisterSaleRepository';

export class RegisterSaleUseCase {
  constructor(private RegisterSaleRepository: IRegisterSaleRepository) {}
  async execute(sale: Array<IRegisterSale>): Promise<IResponseSale> {
    const newSale = await this.RegisterSaleRepository.registerSale(sale);
    return newSale;
  }
}
