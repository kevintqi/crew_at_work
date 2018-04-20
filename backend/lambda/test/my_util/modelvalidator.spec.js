const Sinon = require("sinon");
const should = require("chai").should();
const ModelValidator = require("my_util").ModelValidator;
const Validator = require("validate");

describe("ModelValidator.run()", () => {
  const schema = {
    $schema: "http://json-schema.org/draft-06/schema#",
    title: "Product",
    description: "A product from Acme's catalog",
    type: "object",
    properties: {
      id: {
        description: "The unique identifier for a product",
        type: "integer"
      },
      name: {
        description: "Name of the product",
        type: "string"
      }
    },
    required: ["id"]
  };
  const modelValidator = new ModelValidator(schema);
  it("it should handle valid data", done => {
    const data = { id: 1, name: "nameVal" };
    modelValidator
      .run(data)
      .then(result => {
        result.should.equal(data);
        done();
      })
      .catch(err => {
        should.fail();
        done();
      });
  });
  it("it should handle valid data with optional field", done => {
    const data = { id: 1 };
    modelValidator
      .run(data)
      .then(result => {
        result.should.equal(data);
        done();
      })
      .catch(err => {
        should.fail();
        done();
      });
  });
  it("it should handle invalid data type", done => {
    const data = { id: "idVal", name: "nameVal" };
    modelValidator
      .run(data)
      .then(result => {
        should.fail();
        done();
      })
      .catch(err => {
        err.message.length.should.equal(1);
        err.message[0].should.equal("instance.id is not of a type(s) integer");
        done();
      });
  });
  it("it should handle missing required field", done => {
    const data = { alias: "aliasVal", name: "nameVal" };
    modelValidator
      .run(data)
      .then(result => {
        should.fail();
        done();
      })
      .catch(err => {
        err.message.length.should.equal(1);
        err.message[0].should.equal('instance requires property "id"');
        done();
      });
  });
});
