import express from 'express';

import productRoute from './productsRouter.routes';
import salesRoute from './salesRouter.routes';

const Router = express.Router();

Router.use(productRoute);
Router.use(salesRoute);

export default Router;
