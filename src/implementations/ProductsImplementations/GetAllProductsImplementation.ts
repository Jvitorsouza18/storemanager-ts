import { IProduct } from '../../entities/IProductsEntitiy';
import connection from '../../helpers/connection';
import { IGetAllProducts } from '../../repositories/ProductsRepository/IGetAllProducts';

export class GetAllProductsImplementation implements IGetAllProducts {
  async getAllProducts(): Promise<IProduct[]> {
    const query = 'SELECT * FROM products';
    const [result] = await connection.execute(query);

    return result as IProduct[];
  }
}
