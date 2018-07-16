const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").ModelValidator;
const UserCreator = require("./src/usercreator");

const userCreationModel = require("./src/data/usercreation.json");
const validator = new Validator(userCreationModel);
const userCreator = new UserCreator();
exports.handler = (event, context, callback) => {
    const eventHandler = new EventHandler(event, callback);
    validator
      .run(eventHandler.inputData)
      .then(validData => {
        return userCreator
          .run(validData)
          .then(data => eventHandler.status(200).send(data))
          .catch(err => eventHandler.status(500).send(err));
      })
      .catch(err => eventHandler.status(400).send(err));
  };