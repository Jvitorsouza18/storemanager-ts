import { IProduct } from '../../entities/IProductsEntitiy';

export interface IGetProductById {
  getProductById(id: number): Promise<IProduct>;
}
