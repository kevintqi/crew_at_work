const AWS = require("my_db").AWS;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const dateFormat = require('dateformat');
const uuid = require("uuid/v1");

class Task {
  constructor(data) {
    this.data = {
      squadId: data.squadId,
      assigneeId: data.assigneeId,
      jobId: data.jobId,
      status: "New",
      locationLogs: []
    };
    const now = new Date();
    this.data.effectiveTime = dateFormat(now, "isoDate");
    this.data.taskId = uuid();
    this.client = new Client(AWS);
  }

  build() {
      return this._populateJob();
  }

  _populateJob() {
    const item = new Item("Job");
    item.addKey({squadId:this.data.squadId, jobId:this.data.jobId});
    return this.client.get(item).then(data => {
      this.data.job = data.Item;
      return this.data;
    });
  }
}

module.exports = Task;
