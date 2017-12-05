class BusinessUseCaseWithOrdersHandler {

  constructor(orderRestApi) {
    this.orderRestApi = orderRestApi;
  }

  getAddressForClientByOrderWithId(id) {
    return this.orderRestApi.fetchOrders().then(orders => {
      return orders.find(order => order.id === id);
    })
      .then(order => {
        return this.clientRestApi.findClient(order.clientId);
      });
  }
}
