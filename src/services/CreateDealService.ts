import { getCustomRepository } from 'typeorm';
import DealRepository from '../repositories/DealRepository';

interface Deal {
  date: string;
  total: number;
}

class CreateDealService {
  public async execute(deals: Deal[]): Promise<Deal[]> {
    try {
      const dealRepository = getCustomRepository(DealRepository);

      deals.forEach(async item => {
        const findDeal = await dealRepository.findOne({ where: item.date });
        if (findDeal) {
          findDeal.total += item.total;
        } else {
          const deal = await dealRepository.createDeal(item.date, item.total);
          await dealRepository.save(deal);
        }
      });
      const wons = await dealRepository.findDeals();
      return wons;
    } catch (err) {
      console.log(err);
    }
  }
}

export default CreateDealService;
