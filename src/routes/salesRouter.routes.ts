import express from 'express';

import getAllSalesController from '../integration/SalesIntegration/GetAllSalesIntegration';
import { getSaleByIdController } from '../integration/SalesIntegration/GetSalesByIdIntegration';
import { registerSaleController } from '../integration/SalesIntegration/RegisterSalesIntergration';
import { updateSaleController } from '../integration/SalesIntegration/UpdateSaleIntegration';

const salesRoute = express.Router();

salesRoute
  .get('/sales', async (request, response) => {
    return getAllSalesController.handle(request, response);
  })
  .get('/sales/:id', async (request, response) => {
    return getSaleByIdController.handle(request, response);
  })
  .post('/sales', async (request, response) => {
    return registerSaleController.handle(request, response);
  })
  .put('/sales/:id', async (request, response) => {
    return updateSaleController.handle(request, response);
  });

export default salesRoute;
