const AWS = require("my_db").AWS;
const Item = require("my_db").Item;
const Client = require("my_db").Client;
const dateFormat = require('dateformat');

class TaskGetter {
  constructor() {
    this.client = new Client(AWS);
  }

  run(eventHandler) {
    const item = new Item("Task");
    item
      .addKeyConditionExpression("squadId = :s")
      .withExpressionValues({
        ":s": eventHandler.path.squadId
      });
    const now = new Date();
    const effectiveTime = eventHandler.query.effectiveTime || dateFormat(now, "isoDate");
    item.addFilterExpression("effectiveTime = :time")
      .withExpressionValues({
        ":t": effectiveTime
      });

    return this.client.query(item).then(data => {
      return {
        jobs: data.Items
      };
    });
  }
}

module.exports = TaskGetter;