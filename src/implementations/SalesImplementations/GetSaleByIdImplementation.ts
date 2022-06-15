import { RowDataPacket } from 'mysql2';

import { ISaleById } from '../../entities/ISaleEntityById';
import connection from '../../helpers/connection';
import { IGetSalesByID } from '../../repositories/SalesRepository/IGetAllSalesById';

interface IDataSQL extends RowDataPacket, ISaleById {}

export class GetSaleByIdImplementation implements IGetSalesByID {
  private formatData(data: IDataSQL[]): ISaleById[] {
    return data.map(row => ({
      date: row.date,
      productId: row.product_id,
      quantity: row.quantity,
    }));
  }

  async getSalesById(id: number): Promise<ISaleById[]> {
    const query =
      'SELECT sale_id, date, product_id, quantity FROM sales AS SALES INNER JOIN sales_products AS SALES_PRODUCTS ON SALES_PRODUCTS.sale_id = SALES.id WHERE id = ? ORDER BY sale_id ASC, product_id ASC';
    const [result] = await connection.execute<IDataSQL[]>(query, [id]);

    return this.formatData(result);
  }
}
