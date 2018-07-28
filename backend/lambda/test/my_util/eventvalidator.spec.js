const should = require('chai').should();
const EventValidator = require('my_util').EventValidator;
const EventHandler = require('my_util').EventHandler;

describe("EventValidator.run", () => {
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
        },
        required: ["id"]
    };
    const validator = new EventValidator();
    it("should validate EventHandle", done => {
        const event = {
            headers: {'user-pool-id':'UserPoolIdVal', 'authorization':'AuthorizationVal'},
            body: "{\"id\":5}",
        }
        const eventHandler = new EventHandler(event, null);
        validator.run(eventHandler, schema).then(
            data => {
                data.headers['user-pool-id'].should.equal(event.headers['user-pool-id']);
                data.headers.authorization.should.equal(event.headers.authorization);
                data.data.id.should.equal(5);
            }
        ).catch(err => {
            should.fail();
        });
        done();
    });
    it("should handle missing required header field", done => {
        const event = {
            headers: {'authorization':'AuthorizationVal'},
            body: "{\"id\":5}",
        }
        const eventHandler = new EventHandler(event, null);
        validator.run(eventHandler, schema).then(
            () => {
                should.fail();
            }
        ).catch(err => {
            err.message.length.should.equal(1);
            err.message[0].should.contains('user-pool-id');
        });
        done();
    });
    it("should handle missing required body field", done => {
        const event = {
            headers: {'user-pool-id':'UserPoolIdVal', 'authorization':'AuthorizationVal'},
            body: "{\"ID\":5}",
        }
        const eventHandler = new EventHandler(event, null);
        validator.run(eventHandler, schema).then(
            () => {
                should.fail();
            }
        ).catch(err => {
            err.message.length.should.equal(1);
            err.message[0].should.contains('id');
        });
        done();
    });
    it("should validate header only", done => {
        const event = {
            headers: {'user-pool-id':'UserPoolIdVal', 'authorization':'AuthorizationVal'},
            body: "{\"ID\":5}",
        }
        const eventHandler = new EventHandler(event, null);
        validator.run(eventHandler).then(
            (data) => {
                data.headers['user-pool-id'].should.equal(event.headers['user-pool-id']);
                data.headers.authorization.should.equal(event.headers.authorization);
            }
        ).catch(err => {
            should.fail();
        });
        done();
    });
});