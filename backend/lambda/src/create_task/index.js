const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").ModelValidator;
const TaskCreator = require("./src/taskcreator");

const bodyModel = require("./src/data/taskcreation.json");
const validator = new Validator(bodyModel);
const taskCreator = new TaskCreator();

exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler.inputData)
    .then(validData => {
      return taskCreator
        .run(validData)
        .then(data => eventHandler.status(200).send(data))
        .catch(err => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};
