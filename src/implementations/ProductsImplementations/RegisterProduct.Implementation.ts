import { ResultSetHeader } from 'mysql2';

import { IProduct } from '../../entities/IProductsEntitiy';
import connection from '../../helpers/connection';
import { IRegisterProductRepository } from '../../repositories/ProductsRepository/IRegisterProductRepository';

export class RegisterProductImplementation implements IRegisterProductRepository {
  async registerProduct(product: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const [result] = await connection.execute<ResultSetHeader>(query, [
      product.name,
      product.quantity,
    ]);
    const id = result.insertId;
    const finalProduct = { id, ...product };

    return finalProduct;
  }
}
