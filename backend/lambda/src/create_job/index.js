const Validator = require("./src/modelvalidator");
const jobCreationModel = require("./src/model/jobcreation.json");
const EventHandler = require("./src/eventhandler");

exports.handler = function(event, context, callback) {
  const eventHandler = new EventHandler(event, callback);
  new Validator(jobCreationModel)
    .run(eventHandler.inputData)
    .then(data => {
      eventHandler.status(200).send(data);
    })
    .catch(err => {
      eventHandler.status(500).send(err);
    });
};
