import { IDeleteSaleRepository } from '../../repositories/SalesRepository/IDeleteSaleRepository';

export class DeleteSaleUseCase {
  constructor(private deleteSaleRepository: IDeleteSaleRepository) {}
  async execute(id: string): Promise<void> {
    await this.deleteSaleRepository.deleteSale(id);
  }
}
