import { EntityRepository, Repository } from 'typeorm';
import Deal from '../schemas/Deal';

interface DealDTO {
  data: string;
  total: number;
}

@EntityRepository(Deal)
class DealRepository extends Repository<Deal> {
  public async findDeals(): Promise<DealDTO[] | null> {
    const deals = await this.find();

    return deals;
  }

  public async createDeal(data: string, total: number): Promise<DealDTO> {
    const deal = this.create({ data, total });

    await this.save(deal);

    return deal;
  }
}

export default DealRepository;
