const Validator = require("../util/modelvalidator");

const jobCreationModel = require("./src/data/abc.json");
const validator = new Validator(jobCreationModel);

validator
  .run({})
  .then(validData => {
      console.log(validData);
  })
  .catch(err => {
      console.error(err);
  });
