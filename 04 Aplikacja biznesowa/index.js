class BusinessUseCaseWithOrdersHandler {

  constructor(orderRestApi) {
    this.orderRestApi = orderRestApi;
  }

  getAddressOfClientByOrderWithId(id) {
    return this.orderRestApi.fetchOrders().then(orders => {
      const foundOrder = orders.find(order => order.id === id);
      return foundOrder;
    }).then(foundOrder => {
      return this.clientRestApi.findClient(foundOrder.clientId);
    }).then(client => {
      return client.addressId;
    });
  }
}
