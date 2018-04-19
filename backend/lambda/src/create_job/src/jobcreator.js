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
    return this.client.put(item).then(result => {
      return {
        squadId: result.Item.squadId,
        jobId: result.Item.jobId
      };
    });
  }
}

module.exports = JobCreator;
