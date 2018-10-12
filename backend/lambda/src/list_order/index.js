const GetterHandler = require("my_util").GetterHandler;
const OrderLister = require("./src/orderlister");

const orderLister = new OrderLister();
const getterHandler = new GetterHandler(orderLister);

exports.handler = (event, context, callback) => getterHandler.run(event, context, callback);
