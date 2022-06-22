import { RowDataPacket, ResultSetHeader } from 'mysql2';

import { IProduct } from '../../entities/IProductsEntitiy';
import connection from '../../helpers/connection';
import { IUpdateProductRepository } from '../../repositories/ProductsRepository/IUpdateProductRepository';
import { CustomError } from '../../utils/CutomError';

export class UpdateProductImplementation implements IUpdateProductRepository {
  async updateRepository(id: string, product: IProduct): Promise<IProduct> {
    const query = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;';
    const validationQuery = 'SELECT * from StoreManager.products WHERE id = ?';
    const [productAlreadyExists] = await connection.execute<RowDataPacket[]>(
      validationQuery,
      [id],
    );
    if (!productAlreadyExists.length) throw new CustomError(404, 'Product not found');
    await connection.execute<ResultSetHeader>(query, [
      product.name,
      product.quantity,
      id,
    ]);
    const updatedProduct = { id: Number(id), ...product };
    return updatedProduct;
  }
}
