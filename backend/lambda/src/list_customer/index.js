const GetterHandler = require("my_util").GetterHandler;
const CustomerLister = require("./src/customerlister");

const customerLister = new CustomerLister();
const getterHandler = new GetterHandler(customerLister);

exports.handler = (event, context, callback) => getterHandler.run(event, context, callback);
