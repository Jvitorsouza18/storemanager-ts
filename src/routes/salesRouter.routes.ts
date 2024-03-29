import express from 'express';

import { deleteSaleController } from '../integration/SalesIntegration/DeleSaleIntegration';
import getAllSalesController from '../integration/SalesIntegration/GetAllSalesIntegration';
import { getSaleByIdController } from '../integration/SalesIntegration/GetSalesByIdIntegration';
import { registerSaleController } from '../integration/SalesIntegration/RegisterSalesIntergration';
import { updateSaleController } from '../integration/SalesIntegration/UpdateSaleIntegration';
import { saleRequestValidation } from '../middlewares/SaleValidation';

const salesRoute = express.Router();

salesRoute
  .get('/sales', async (request, response) => {
    return getAllSalesController.handle(request, response);
  })
  .get('/sales/:id', async (request, response) => {
    return getSaleByIdController.handle(request, response);
  })
  .post('/sales', saleRequestValidation.validate, async (request, response) => {
    return registerSaleController.handle(request, response);
  })
  .put('/sales/:id', saleRequestValidation.validate, async (request, response) => {
    return updateSaleController.handle(request, response);
  })
  .delete('/sales/:id', async (request, response) => {
    return deleteSaleController.handle(request, response);
  });

export default salesRoute;
