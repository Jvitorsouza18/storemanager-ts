import express from 'express';

import { deleteProductController } from '../integration/ProductsIntegration/DeleteProductIntegration';
import getAllProductsController from '../integration/ProductsIntegration/GetAllProductsIntegration';
import { getProductByIdController } from '../integration/ProductsIntegration/GetProductByIdIntegration';
import { registerProductController } from '../integration/ProductsIntegration/RegisterProduct';
import { updateProductController } from '../integration/ProductsIntegration/UpdateProductIntegration';

const productRoute = express.Router();

productRoute
  .get('/products', async (request, response) => {
    return getAllProductsController.handle(request, response);
  })
  .get('/products/:id', async (request, response) => {
    return getProductByIdController.handle(request, response);
  })
  .post('/products', async (request, response) => {
    return registerProductController.handle(request, response);
  })
  .put('/products/:id', async (request, response) => {
    return updateProductController.handle(request, response);
  })
  .delete('/products/:id', async (request, response) => {
    return deleteProductController.handle(request, response);
  });

export default productRoute;
