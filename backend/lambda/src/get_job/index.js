const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").ModelValidator;
const JobGetter = require("./src/jobgetter");

const eventHeaderModel = require("./src/data/eventheader.json");
const validator = new Validator(eventHeaderModel);
const jobGetter = new JobGetter();

exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler.headers)
    .then(validData => {
      return jobGetter
        .run(validData)
        .then(data => eventHandler.status(200).send(data))
        .catch(err => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};
