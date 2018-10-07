const CreatorHandler = require("my_util").CreatorHandler;
const Creator = require("./src/customercreator");

const inputDataModel = require("./src/data/customercreation.json");
const creator = new Creator();
const creatorHandler = new CreatorHandler(creator, inputDataModel);

exports.handler = (event, context, callback) => creatorHandler.run(event, context, callback);
