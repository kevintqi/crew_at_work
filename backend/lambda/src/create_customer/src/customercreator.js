const AWS = require("my_db").AWS;
const Table = require("my_db").Table;
const Item = require("my_db").Item;
const Client = require("my_db").Client;

const tableParams = require("./data/customertable.json");

class CustomerCreator {
  constructor() {
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(inputData) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createCustomer(inputData);
      });
    } else {
      return this._createCustomer(inputData);
    }
  }

  _createCustomer(inputData) {
    const item = new Item(tableParams.TableName);
    inputData.data.userPoolId = inputData.headers['user-pool-id'];
    item.addData(inputData.data);
    return this.client.put(item).then(result => {
      return {
        userPoolId: result.Item.userPoolId,
        email: result.Item.email
      };
    });
  }
}

module.exports = CustomerCreator;
