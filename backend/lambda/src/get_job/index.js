const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").EventValidator;
const JobGetter = require("./src/jobgetter");

const validator = new Validator();
const jobGetter = new JobGetter();

exports.handler = (event, context, callback) => {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler)
    .then(validData => {
      return jobGetter.run(validData)
        .then(data => eventHandler.status(200).send(data))
        .catch(err => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
};
