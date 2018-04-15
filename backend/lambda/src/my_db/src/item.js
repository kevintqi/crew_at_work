class Item {
  constructor(tableName) {
    this.TableName = tableName;
  }

  addKey(key) {
    this.Key = key;
    return this;
  }

  addData(data) {
    this.Item = data;
    return this;
  }

  addKeyConditionExpression(expression) {
    this.KeyConditionExpression = expression;
    return this;
  }

  addUpdateExpression(expression) {
    this.UpdateExpression = expression;
    return this;
  }

  withExpressionValues(values) {
    this.ExpressionAttributeValues = values;
    return this;
  }

  addConditionExpression(expression) {
    this.ConditionExpression = expression;
    return this;
  }

  addReturnValues(values) {
    this.ReturnValues = values;
    return this;
  }
}

module.exports = Item;