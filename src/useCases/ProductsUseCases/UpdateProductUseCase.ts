import { IProduct } from '../../entities/IProductsEntitiy';
import { IUpdateProductRepository } from '../../repositories/ProductsRepository/IUpdateProductRepository';
import { CustomError } from '../../utils/CutomError';

export class UpdateProductUseCase {
  constructor(private updateProductRepository: IUpdateProductRepository) {}

  async execute(id: string, product: IProduct): Promise<IProduct> {
    const data = await this.updateProductRepository.updateRepository(id, product);
    if (!data) throw new CustomError(404, 'Product not found');
    return data;
  }
}
