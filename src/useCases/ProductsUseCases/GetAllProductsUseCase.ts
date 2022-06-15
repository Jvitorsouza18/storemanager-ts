import { IProduct } from '../../entities/IProductsEntitiy';
import { IGetAllProducts } from '../../repositories/ProductsRepository/IGetAllProducts';
import { CustomError } from '../../utils/CutomError';

export class GetAllProductsUseCase {
  constructor(private getAllProductRepository: IGetAllProducts) {}

  async execute(): Promise<IProduct[]> {
    const data = await this.getAllProductRepository.getAllProducts();
    if (!data) throw new CustomError(404, 'Product not found');
    return data;
  }
}
