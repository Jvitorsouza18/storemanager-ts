import { ISale } from '../../entities/ISalesEntity';

export interface IGetAllSales {
  getAllSales(): Promise<ISale[]>;
}
