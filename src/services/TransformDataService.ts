interface DealDTO {
  pedido: {
    data: string;
    totalvenda: string;
  };
}

class TransformDataService {
  public async execute(data: DealDTO[]): Promise<Omit<DealDTO, 'pedido'>> {
    const pedidos = data.map(item => {
      return {
        data: item.pedido.data,
        total: Number(item.pedido.totalvenda),
      };
    });
    return pedidos;
    console.log(pedidos);
  }
}

export default TransformDataService;
