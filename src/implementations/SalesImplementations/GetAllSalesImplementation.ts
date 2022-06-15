import { RowDataPacket } from 'mysql2';

import { ISale } from '../../entities/ISalesEntity';
import connection from '../../helpers/connection';
import { IGetAllSales } from '../../repositories/SalesRepository/IGetAllSales';

interface IDataSQL extends RowDataPacket, ISale {}

export class GetAllSalesImplementation implements IGetAllSales {
  private formatData(data: IDataSQL[]): ISale[] {
    return data.map(row => ({
      saleId: row.sale_id,
      date: row.date,
      productId: row.product_id,
      quantity: row.quantity,
    }));
  }

  async getAllSales(): Promise<ISale[]> {
    const query =
      'SELECT sale_id, date, product_id, quantity FROM sales AS SALES INNER JOIN sales_products AS SALES_PRODUCTS ON SALES_PRODUCTS.sale_id = SALES.id ORDER BY sale_id ASC, product_id ASC';
    const [result] = await connection.execute<IDataSQL[]>(query);

    return this.formatData(result);
  }
}
