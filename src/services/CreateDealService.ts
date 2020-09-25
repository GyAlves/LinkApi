import { getCustomRepository } from 'typeorm';
import DealRepository from '../repositories/DealRepository';

interface Deal {
  date: string;
  total: number;
}

class CreateDealService {
  public async execute(deals: Deal[]): Promise<Deal[]> {
    const dealRepository = getCustomRepository(DealRepository);

    deals.forEach(async deal => {
      const create = await dealRepository.createDeal(deal.date, deal.total);
      await dealRepository.save(create);
    });

    const wons = await dealRepository.findDeals();

    return wons;
  }
}

export default CreateDealService;
