import express from 'express';

import getAllSalesController from '../integration/SalesIntegration/GetAllSalesIntegration';
import { getSaleByIdController } from '../integration/SalesIntegration/GetSalesByIdIntegration';

const salesRoute = express.Router();

salesRoute
  .get('/sales', async (request, response) => {
    return getAllSalesController.handle(request, response);
  })
  .get('/sales/:id', async (request, response) => {
    return getSaleByIdController.handle(request, response);
  });

export default salesRoute;
