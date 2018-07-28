const AWS = require("my_db").AWS;
const Item = require("my_db").Item;
const Client = require("my_db").Client;

class JobGetter {
  constructor() {
    this.client = new Client(AWS);
  }

  run(inputData) {
    const item = new Item("Job");
    item
      .addKeyConditionExpression("squadId = :s")
      .withExpressionValues({ ":s": inputData.headers.UserPoolId});
    return this.client.query(item).then(data => {
      return { jobs: data.Items };
    });
  }
}

module.exports = JobGetter;
