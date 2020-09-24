import { Router } from 'express';
import dealRouter from './deal.routes';

const routes = Router();

routes.use('/deals', dealRouter);

export default routes;
