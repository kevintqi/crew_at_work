const AWS = require("my_db").AWS;
const Item = require("my_db").Item;
const Client = require("my_db").Client;

class CustomerLister {
  constructor() {
    this.client = new Client(AWS);
  }

  run(inputData, eventHandler) {
    const item = new Item("Customer");
    item
      .addKeyConditionExpression("userPoolId = :u")
      .withExpressionValues({ ":u": inputData.headers['user-pool-id']});
    return this.client.query(item).then(data => {
      return { customers: data.Items };
    });
  }
}

module.exports = CustomerLister;
