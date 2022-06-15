import express from 'express';

import getAllProductsController from '../integration/ProductsIntegration/GetAllProductsIntegration';
import { getProductByIdController } from '../integration/ProductsIntegration/GetProductByIdIntegration';

const productRoute = express.Router();

productRoute
  .get('/products', async (request, response) => {
    return getAllProductsController.handle(request, response);
  })
  .get('/products/:id', async (request, response) => {
    return getProductByIdController.handle(request, response);
  });

export default productRoute;
