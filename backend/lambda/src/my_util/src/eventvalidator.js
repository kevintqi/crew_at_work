const ModelValidator = require('./modelvalidator');
const headerSchema = require('./data/eventheader.json');

class EventValidator {
  run(eventHandler, schema) {
    return new ModelValidator(headerSchema).run(eventHandler.headers)
      .then(() => new ModelValidator(schema).run(eventHandler.inputData))
      .then(() => {
        return {
          headers: eventHandler.headers,
          data: eventHandler.inputData
        };
      });
  }
}

module.exports = EventValidator;