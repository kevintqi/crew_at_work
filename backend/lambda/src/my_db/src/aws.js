const AWS = require("aws-sdk");
const awsConfig = require("../awsconfig.json");

AWS.config.update(awsConfig);
module.exports = AWS;
