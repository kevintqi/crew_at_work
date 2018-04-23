const AWS = require("my_db").AWS;
const Table = require("my_db").Table;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const Task = require("./task");

const tableParams = require("./data/tasktable.json");

class TaskCreator {
  constructor() {
    this.table = new Table(AWS, tableParams);
    this.client = new Client(AWS);
  }

  run(data) {
    if (!this.table.created) {
      return this.table.create().then(() => {
        return this._createTask(data);
      });
    } else {
      return this._createTask(data);
    }
  }

  _createTask(data) {
    const task = new Task(data);
    return task.build().then(taskData => {
      const item = new Item(tableParams.TableName);
      item.addData(taskData);
      return this.client.put(item).then(result => {
        return {
          effectiveTime: result.Item.effectiveTime,
          taskId: result.Item.taskId
        };
      });
    });
  }
}

module.exports = TaskCreator;
