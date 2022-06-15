import { RowDataPacket } from 'mysql2';

import { IProduct } from '../../entities/IProductsEntitiy';
import connection from '../../helpers/connection';
import { IGetProductById } from '../../repositories/ProductsRepository/IGetProductsById';

interface IDataSQL extends RowDataPacket, IProduct {}

export class GetProductByIdImplementation implements IGetProductById {
  async getProductById(id: number): Promise<IProduct> {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [result] = await connection.execute<IDataSQL[]>(query, [id]);

    return result[0];
  }
}
