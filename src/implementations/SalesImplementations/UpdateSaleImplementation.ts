import { IRegisterSale } from '../../entities/IRegisterSale';
import { IUpdateSaleResponse } from '../../entities/IUpdateSaleReponse';
import connection from '../../helpers/connection';
import { IUpdateSaleRepository } from '../../repositories/SalesRepository/IUpdateSaleRepository';

export class UpdateSaleImplementation implements IUpdateSaleRepository {
  async updateSingleSale(sale: IRegisterSale, id: string) {
    const updateSaleQ =
      'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?';

    const updateSaleQtyQ =
      'UPDATE StoreManager.products SET quantity = quantity - ? WHERE id = ?';

    const updateSaleExe = await connection.execute(updateSaleQ, [
      sale.quantity,
      id,
      sale.productId,
    ]);

    const updateSaleQtyExe = await connection.execute(updateSaleQtyQ, [
      sale.quantity,
      sale.productId,
    ]);
    const arrayOfSales = [updateSaleExe, updateSaleQtyExe];
    await Promise.all(arrayOfSales);
  }

  async updateSale(sale: IRegisterSale[], id: string): Promise<IUpdateSaleResponse> {
    await Promise.all(
      sale.map(async (e: IRegisterSale) => {
        this.updateSingleSale(e, id);
      }),
    );
    const finalResponse = { saleId: Number(id), itemUpdated: [...sale] };
    return finalResponse as IUpdateSaleResponse;
  }
}
