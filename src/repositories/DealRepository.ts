import { EntityRepository, Repository } from 'typeorm';
import Deal from '../schemas/Deal';

interface DealDTO {
  date: Date;
  total: number;
}

@EntityRepository(Deal)
class DealRepository extends Repository<Deal> {
  public async findDeals(): Promise<Deal[] | null> {
    const deals = await this.find();

    return deals;
  }

  public async createDeal({ date, total }: DealDTO): Promise<Deal> {
    const deal = this.create({ date, total });

    await this.save(deal);

    return deal;
  }
}

export default DealRepository;
