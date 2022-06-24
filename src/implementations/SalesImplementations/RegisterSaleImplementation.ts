import { ResultSetHeader, RowDataPacket } from 'mysql2';

import { IRegisterSale } from '../../entities/IRegisterSale';
import { IResponseSale } from '../../entities/IResponseSale';
import connection from '../../helpers/connection';
import { IRegisterSaleRepository } from '../../repositories/SalesRepository/IRegisterSaleRepository';
import { CustomError } from '../../utils/CutomError';

export class RegisterSaleImpplementation implements IRegisterSaleRepository {
  async registerSale(sale: IRegisterSale[]): Promise<IResponseSale> {
    await this.validateQuantity(sale);
    const salesInsertionQuery =
      'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP());';
    const [{ insertId }] = await connection.execute<ResultSetHeader>(salesInsertionQuery);
    await Promise.all(
      sale.map(async (e: IRegisterSale) => {
        this.insertSingleSale(e, insertId);
      }),
    );

    const finalResponse = { id: Number(insertId), itemsSold: [...sale] };

    return finalResponse as IResponseSale;
  }

  private async validateQuantity(salesArray: IRegisterSale[]) {
    const hasError = salesArray.map(async (sale: IRegisterSale) => {
      const Q = 'SELECT quantity FROM StoreManager.products WHERE id = ?';
      const [result] = await connection.execute<RowDataPacket[]>(Q, [sale.productId]);
      return sale.quantity - result[0].quantity < 0;
    });
    const arrayRes = await Promise.all(hasError);
    const shouldThrow = arrayRes.some(e => e === false);
    if (shouldThrow) throw new CustomError(422, 'Such amount is not permitted to sell');
  }

  async insertSingleSale(sale: IRegisterSale, id: number): Promise<void> {
    const insertSale =
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    const updateProduct =
      'UPDATE StoreManager.products SET quantity = quantity - ? WHERE id = ?';
    const insertNewSale = await connection.execute(insertSale, [
      id,
      sale.productId,
      sale.quantity,
    ]);
    const updateNewProduct = await connection.execute(updateProduct, [
      sale.quantity,
      sale.productId,
    ]);
    const arrayOfSales = [insertNewSale, updateNewProduct];
    await Promise.all(arrayOfSales);
  }
}
