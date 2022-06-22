import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { IProduct } from '../../entities/IProductsEntitiy';
import connection from '../../helpers/connection';
import { IRegisterProductRepository } from '../../repositories/ProductsRepository/IRegisterProductRepository';
import { CustomError } from '../../utils/CutomError';

export class RegisterProductImplementation implements IRegisterProductRepository {
  async registerProduct(product: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
    const validationQuery = 'SELECT * from StoreManager.products WHERE name = ?';
    const [productAlreadyExists] = await connection.execute<RowDataPacket[]>(
      validationQuery,
      [product.name],
    );
    if (productAlreadyExists.length) throw new CustomError(409, 'Product already exists');

    const [result] = await connection.execute<ResultSetHeader>(query, [
      product.name,
      product.quantity,
    ]);
    const id = result.insertId;
    const finalProduct = { id, ...product };

    return finalProduct;
  }
}
