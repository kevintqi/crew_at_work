class Table {
  constructor(AWS, params) {
    this.db = new AWS.DynamoDB();
    this.params = params;
    this.created = false;
  }

  describe() {
    const self = this;
    return new Promise((resolve, reject) => {
      self.db.describeTable(
        { TableName: self.params.TableName },
        (err, data) => {
          if (err) {
            return reject(err);
          }
          self.created = true;
          return resolve(data);
        }
      );
    });
  }

  create() {
    const self = this;
    return this.describe().catch(err => {
      if (err.code === "ResourceNotFoundException") {
        return new Promise((resolve, reject) => {
          this.db.createTable(self.params, (err, data) => {
            if (err) {
              return reject(err);
            }
            self.created = true;
            return resolve(data);
          });
        });
      }
      throw err;
    });
  }
}

module.exports = Table;
