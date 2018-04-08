const Validator = require("validate");

class ModelValidator {
  constructor(schema) {
    this.validator = new Validator(schema);
  }

  run(data) {
    const validationErr = this.validator.validate(data);
    return new Promise((resolve, reject) => {
      if (validationErr.length === 0) {
        return resolve(data);
      }
      const err = new Error();
      err.message = validationErr.map(d => {
        return d.message;
      });
      return reject(err);
    });
  }
}

module.exports = ModelValidator;
