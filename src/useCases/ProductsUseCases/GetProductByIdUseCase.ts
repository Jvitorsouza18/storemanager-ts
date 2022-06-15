import { IProduct } from '../../entities/IProductsEntitiy';
import { IGetProductById } from '../../repositories/ProductsRepository/IGetProductsById';
import { CustomError } from '../../utils/CutomError';

export class GetProductByIdUseCase {
  constructor(private getProductByIdRepository: IGetProductById) {}

  async execute(id: number): Promise<IProduct> {
    const data = await this.getProductByIdRepository.getProductById(id);
    if (!data) throw new CustomError(404, 'Product not found');
    return data;
  }
}
