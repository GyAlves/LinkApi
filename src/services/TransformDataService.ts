interface DealDTO {
  pedido: {
    data: string;
    totalvenda: string;
  };
}

class TransformDataService {
  public async execute(data: DealDTO[]): Promise<Omit<DealDTO, 'pedido'>> {
    // Get the data from the api and return only the date and the value fields
    const deals = data.map(item => {
      return {
        date: item.pedido.data,
        total: Number(item.pedido.totalvenda),
      };
    });
    const uniqueDates = [];
    const sameDates = [];

    // Creat an array with unique dates
    deals.map(deal => {
      if (uniqueDates.includes(deal.date) === false) {
        uniqueDates.push(deal.date);
      }
    });
    /*
      Add empty arrays for each date in uniqueDates
      Each array will contain an object with the date and an empty array for
      the values
    */
    for (let i = 0; i < uniqueDates.length; i++) {
      sameDates.push([{ date: uniqueDates[i] }, []]);
    }
    /*
      Verify the existence of duplicated dates and add their value
      to the same array with the same date
    */
    for (let i = 0; i < uniqueDates.length; i++) {
      deals.forEach(deal => {
        if (deal.date === uniqueDates[i]) {
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
        return { date: deal[i].date, total: deal[1] };
      }
    });

    return finalDeal;
  }
}

export default TransformDataService;
