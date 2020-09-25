/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import blingApi from '../apis/blingApi';

import TransformDataService from '../services/TransformDataService';
import CreateDealService from '../services/CreateDealService';

export default class DealsController {
  public async index(request: Request, response: Response) {
    const { data } = await blingApi.get('');

    const deals = data.retorno.pedidos;

    const transformDataService = new TransformDataService();
    const createDealService = new CreateDealService();

    const dealsData = await transformDataService.execute(deals);
    const pedidos = await createDealService.execute(dealsData as []);

    return response.json(pedidos);
  }
}
