import { Router } from 'express';
import productsRouter from '@modules/products/routes/ProductsRoutes';
import usersRouter from '@modules/users/routes/usersRoutes';
import sessionsRouter from '@modules/users/routes/sessionRouter';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
