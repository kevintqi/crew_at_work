const EventHandler = require("./src/eventhandler");
const Validator = require("./src/modelvalidator");
const JobCreator = require("./src/jobcreator");

const jobCreationModel = require("./src/data/jobcreation.json");
const validator = new Validator(jobCreationModel);
const jobCreator = new JobCreator();

exports.handler = function(event, context, callback) {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler.inputData)
    .then(validData => {
      return jobCreator.run(validData).then(data => {
        eventHandler.status(200).send(data);
      });
    })
    .catch(err => {
      eventHandler.status(500).send(err);
    });
};
