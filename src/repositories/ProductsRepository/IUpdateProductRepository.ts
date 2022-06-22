import { IProduct } from '../../entities/IProductsEntitiy';

export interface IUpdateProductRepository {
  updateRepository(id: string, product: IProduct): Promise<IProduct>;
}
