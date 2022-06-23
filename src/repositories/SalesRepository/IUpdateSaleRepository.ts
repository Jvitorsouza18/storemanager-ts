import { IRegisterSale } from '../../entities/IRegisterSale';
import { IUpdateSaleResponse } from '../../entities/IUpdateSaleReponse';

export interface IUpdateSaleRepository {
  updateSale(sale: Array<IRegisterSale>, id: string): Promise<IUpdateSaleResponse>;
}
