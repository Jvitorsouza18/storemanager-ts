import { ISaleById } from '../../entities/ISaleEntityById';

export interface IGetSalesByID {
  getSalesById(id: number): Promise<ISaleById[]>;
}
