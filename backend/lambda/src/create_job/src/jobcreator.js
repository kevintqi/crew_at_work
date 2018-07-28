const AWS = require("my_db").AWS;
const Table = require("my_db").Table;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const uuid = require("uuid/v1");

const tableParams = require("./data/jobtable.json");

class JobCreator {
  constructor() {
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(inputData) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createJob(inputData);
      });
    } else {
      return this._createJob(inputData);
    }
  }

  _createJob(inputData) {
    const item = new Item(tableParams.TableName);
    inputData.data.jobId = uuid();
    inputData.data.squadId = inputData.headers['user-pool-id'];
    item.addData(inputData.data);
    return this.client.put(item).then(result => {
      return {
        squadId: result.Item.squadId,
        jobId: result.Item.jobId
      };
    });
  }
}

module.exports = JobCreator;
