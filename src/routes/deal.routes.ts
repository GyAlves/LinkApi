import { Router } from 'express';
import DealsController from '../controllers/DealsController';

const dealsController = new DealsController();

const dealRouter = Router();

dealRouter.get('/', dealsController.index);

export default dealRouter;
