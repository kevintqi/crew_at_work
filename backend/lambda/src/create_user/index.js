const EventHandler = require("my_util").EventHandler;
const Validator = require("my_util").EventValidator;
const UserCreator = require("./src/usercreator");

const userCreationModel = require("./src/data/usercreation.json");
const validator = new Validator();
const userCreator = new UserCreator();
exports.handler = (event, context, callback) => {
    const eventHandler = new EventHandler(event, callback);
    validator
      .run(eventHandler, userCreationModel)
      .then(validData => {
        return userCreator.run(validData)
          .then(data => eventHandler.status(200).send(data))
          .catch(err => eventHandler.status(500).send(err));
      })
      .catch(err => eventHandler.status(400).send(err));
  };