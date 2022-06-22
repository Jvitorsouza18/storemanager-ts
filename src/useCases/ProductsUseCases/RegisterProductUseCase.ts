import { IProduct } from '../../entities/IProductsEntitiy';
import { IRegisterProductRepository } from '../../repositories/ProductsRepository/IRegisterProductRepository';

export class RegisterProductUseCase {
  constructor(private RegisterProductRepository: IRegisterProductRepository) {}

  async execute(product: IProduct): Promise<IProduct> {
    const newProduct = await this.RegisterProductRepository.registerProduct(product);
    return newProduct;
  }
}
