const AWS = require('./db/aws');
const Table = require("./db/table");
const Item = require("./db/item");
const Client = require("./db/client.js");
const uuid = require("uuid/v1");

const tableParams = require("./data/jobtable.json");

class JobCreator {
  constructor() {
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(data) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createJob(data);
      });
    } else {
      return this._createJob(data);
    }
  }

  _createJob(data) {
    const item = new Item(tableParams.TableName);
    data.jobId = uuid();
    item.addData(data);
    return this.client.put(item);
  }
}

module.exports = JobCreator;
