import { IRegisterSale } from '../../entities/IRegisterSale';
import { IResponseSale } from '../../entities/IResponseSale';

export interface IRegisterSaleRepository {
  registerSale(sale: Array<IRegisterSale>): Promise<IResponseSale>;
}
