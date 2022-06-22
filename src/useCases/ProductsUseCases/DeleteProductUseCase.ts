import { IDeleteProductRepository } from '../../repositories/ProductsRepository/IDeleteProductRepository';

export class DeleteProductUseCase {
  constructor(private deleteProductRepository: IDeleteProductRepository) {}
  async execute(id: string): Promise<void> {
    await this.deleteProductRepository.deleteProduct(id);
  }
}
