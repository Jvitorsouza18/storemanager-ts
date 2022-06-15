import { IProduct } from '../../entities/IProductsEntitiy';

export interface IGetAllProducts {
  getAllProducts(): Promise<IProduct[]>;
}
