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
  }

  addConditionExpression(value) {
    this.ConditionExpression = value;
    return this;
  }

  addProjectionExpression(value) {
    this.ProjectionExpression = value;
    return this;
  }
  
  withExpressionAttributeNames(value) {
    this.ExpressionAttributeNames = value;
    return this;
  }

  withExpressionValues(values) {
    this.ExpressionAttributeValues = values;
    return this;
  }

  addReturnValues(values) {
    this.ReturnValues = values;
    return this;
  }
}

module.exports = Item;