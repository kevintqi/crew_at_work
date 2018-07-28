const ModelValidator = require('./modelvalidator');
const headerSchema = require('./data/eventheader.json');

class EventValidator {
  run(eventHandler, schema) {
    return new ModelValidator(headerSchema).run(eventHandler.headers)
      .then(() => {
          if (schema) {
            return new ModelValidator(schema).run(eventHandler.inputData);
          }
          return eventHandler.inputData;
        })
      .then(() => {
        return {
          headers: eventHandler.headers,
          data: eventHandler.inputData
        };
      });
  }
}

module.exports = EventValidator;