const AWS = require('my_db').AWS;
const Item = require('my_db').Item;
const Client = require('my_db').Client;

class OrderLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(inputData, eventHandler) {
    const item = new Item("Order");
    if (eventHandler.query && eventHandler.query.customerId) {
      item
        .addKeyConditionExpression("customerId = :c")
        .withExpressionValues({ ":c": eventHandler.query.customerId});
    }
    return this.client.query(item).then(data => {
      return { customers: data.Items };
    });
  }
}

module.exports = OrderLister;
