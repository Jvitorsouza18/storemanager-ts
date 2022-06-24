export interface IDeleteSaleRepository {
  deleteSale(id: string): Promise<void>;
}
