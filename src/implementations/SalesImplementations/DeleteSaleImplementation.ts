import { RowDataPacket } from 'mysql2';

import connection from '../../helpers/connection';
import { IDeleteSaleRepository } from '../../repositories/SalesRepository/IDeleteSaleRepository';
import { CustomError } from '../../utils/CutomError';

export class DeleteSaleImplementation implements IDeleteSaleRepository {
  async deleteSale(id: string): Promise<void> {
    const verifySaleQ = 'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?';
    const [saleExists] = await connection.execute<RowDataPacket[]>(verifySaleQ, [id]);
    if (!saleExists.length) throw new CustomError(404, 'Sale not found');
    const deleteQ = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
    await connection.execute(deleteQ, [id]);
    const updateQ =
      'UPDATE StoreManager.products SET quantity = quantity + ? WHERE id = ?';
    saleExists.map(async e => {
      await connection.execute(updateQ, [e.quantity, e.product_id]);
    });
  }
}
