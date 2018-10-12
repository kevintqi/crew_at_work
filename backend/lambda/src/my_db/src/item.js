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

  addKeyConditionExpression(value) {
    this.KeyConditionExpression = value;
    return this;
  }

  addUpdateExpression(value) {
    this.UpdateExpression = value;
    return this;
  }

  addFilterExpression(value) {
    this.FilterExpression = value;
    return this;
  }

  addConditionExpression(value) {
    this.ConditionExpression = value;
    return this;
  }

  withExpressionValues(values) {
    this.ExpressionAttributeValues = this.ExpressionAttributeValues || {};
    this.ExpressionAttributeValues = Object.assign(values, this.ExpressionAttributeValues);
    return this;
  }

  addReturnValues(values) {
    this.ReturnValues = values;
    return this;
  }
}

module.exports = Item;