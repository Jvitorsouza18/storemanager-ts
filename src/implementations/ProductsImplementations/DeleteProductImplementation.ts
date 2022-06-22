import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from '../../helpers/connection';
import { IDeleteProductRepository } from '../../repositories/ProductsRepository/IDeleteProductRepository';
import { CustomError } from '../../utils/CutomError';

export class DeleteProductImplementation implements IDeleteProductRepository {
  async deleteProduct(id: string): Promise<void> {
    const query = 'DELETE FROM products WHERE id = ?';
    const validationQuery = 'SELECT * from StoreManager.products WHERE id = ?';
    const [productAlreadyExists] = await connection.execute<RowDataPacket[]>(
      validationQuery,
      [id],
    );
    if (!productAlreadyExists.length) throw new CustomError(404, 'Product not found');
    await connection.execute<ResultSetHeader>(query, [id]);
  }
}
