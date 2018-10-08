const AWS = require("my_db").AWS;
const Table = require("my_db").Table;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const uuid = require("uuid/v1");

const tableParams = require("./data/ordertable.json");

class OrderCreator {
  constructor() {
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(inputData) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createOrder(inputData);
      });
    } else {
      return this._createOrder(inputData);
    }
  }

  _createOrder(inputData) {
    const item = new Item(tableParams.TableName);
    inputData.data.userPoolId = inputData.headers['user-pool-id'];
    inputData.data.orderId = uuid();
    item.addData(inputData.data);
    return this.client.put(item).then(result => {
      return {
        userPoolId: result.Item.userPoolId,
        orderId: result.Item.orderId
      };
    });
  }
}

module.exports = OrderCreator;
