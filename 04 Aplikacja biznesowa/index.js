class BusinessUseCaseWithOrdersHandler {

  constructor(orderRestApi) {
    this.orderRestApi = orderRestApi;
  }

  getOrderWithId(id, callback) {
    this.orderRestApi.fetchOrders(orders => {
      const foundOrder = orders.find(order => order.id === id);
      callback(foundOrder);
    });
  }
}
