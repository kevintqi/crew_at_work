const CreatorHandler = require("my_util").CreatorHandler;
const Creator = require("./src/ordercreator");

const inputDataModel = require("./src/data/ordercreation.json");
const creator = new Creator();
const creatorHandler = new CreatorHandler(creator, inputDataModel);

exports.handler = (event, context, callback) => creatorHandler.run(event, context, callback);
