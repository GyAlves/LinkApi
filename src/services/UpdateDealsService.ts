import { getCustomRepository } from 'typeorm';
import DealRepository from '../repositories/DealRepository';

interface Deal {
  date: string;
  total: number;
}

class UpdateDealService {
  public async execute(deals: Deal[]): Promise<Deal[]> {
    const dealRepository = getCustomRepository(DealRepository);

    const findDeals = await dealRepository.findDeals();
    if (deals.length === findDeals.length) {
      return findDeals;
    }
    await dealRepository.clear();
  }
}

export default UpdateDealService;
