export interface IResponseSale {
  id: number;
  itemsSold: Array<{
    productId: number;
    quantity: number;
  }>;
}
