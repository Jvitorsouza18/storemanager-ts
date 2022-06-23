export interface IUpdateSaleResponse {
  saleId: number;
  itemUpdated: Array<{
    productId: number;
    quantity: number;
  }>;
}
