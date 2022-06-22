import { IProduct } from '../../entities/IProductsEntitiy';

export interface IRegisterProductRepository {
  registerProduct(product: IProduct): Promise<IProduct>;
}
