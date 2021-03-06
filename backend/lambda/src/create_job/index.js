const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").EventValidator;
const JobCreator = require("./src/jobcreator");

const jobCreationModel = require("./src/data/jobcreation.json");
const validator = new Validator();
const jobCreator = new JobCreator();

exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler, jobCreationModel)
    .then(validData => {
      return jobCreator
        .run(validData)
        .then(data => eventHandler.status(200).send(data))
        .catch(err => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};
