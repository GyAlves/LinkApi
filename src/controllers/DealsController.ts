/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import blingApi from '../apis/blingApi';

import TransformDataService from '../services/TransformDataService';

export default class DealsController {
  public async index(request: Request, response: Response) {
    const { data } = await blingApi.get('');

    const deals = data.retorno.pedidos;

    const transformDataService = new TransformDataService();

    const pedidos = await transformDataService.execute(deals);

    return response.json(pedidos);
  }
}
