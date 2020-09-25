import { getCustomRepository } from 'typeorm';
import DealRepository from '../repositories/DealRepository';

interface Deal {
  data: string;
  total: number;
}

class CreateDealService {
  public async execute(deals: Deal[]): Promise<Deal[]> {
    const dealRepository = getCustomRepository(DealRepository);

    const uniqueDates = [];
    const sameDates = [];

    // Creat an array with unique dates
    deals.map(deal => {
      if (uniqueDates.includes(deal.data) === false) {
        uniqueDates.push(deal.data);
      }
    });
    /*
      Add empty arrays for each date in uniqueDates
      Each array will contain an object with the date and an empty array for
      the values
    */
    for (let i = 0; i < uniqueDates.length; i++) {
      sameDates.push([{ data: uniqueDates[i] }, []]);
    }
    /*
      Verify the existence of duplicated dates and add their value
      to the same array with the same date
    */
    for (let i = 0; i < uniqueDates.length; i++) {
      deals.forEach(deal => {
        if (deal.data === uniqueDates[i]) {
          sameDates[i][1].push(deal.total);
        }
      });
    }
    /*
      Calculate the total sum of each date
    */
    for (let i = 0; i < sameDates.length; i++) {
      const total = sameDates[i][1].reduce(
        (accumulator: number, item: number) => {
          return accumulator + item;
        },
        0,
      );

      sameDates[i][1] = total;
    }

    // Create an array with an object containing the date and total
    const finalDeal = sameDates.map(deal => {
      for (let i = 0; i < deal.length; i++) {
        return { data: deal[i].data, total: deal[1] };
      }
    });

    finalDeal.forEach(async deal => {
      const create = await dealRepository.createDeal(deal.data, deal.total);
      await dealRepository.save(create);
    });

    const wons = await dealRepository.findDeals();

    return wons;
  }
}

export default CreateDealService;
