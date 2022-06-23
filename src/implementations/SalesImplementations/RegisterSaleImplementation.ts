import { ResultSetHeader } from 'mysql2';

import { IRegisterSale } from '../../entities/IRegisterSale';
import { IResponseSale } from '../../entities/IResponseSale';
import connection from '../../helpers/connection';
import { IRegisterSaleRepository } from '../../repositories/SalesRepository/IRegisterSaleRepository';

export class RegisterSaleImpplementation implements IRegisterSaleRepository {
  async insertSingleSale(sale: IRegisterSale, id: number) {
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

  async registerSale(sale: IRegisterSale[]): Promise<IResponseSale> {
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
}
