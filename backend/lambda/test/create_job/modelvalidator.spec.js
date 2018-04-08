const Sinon = require('sinon');
const should = require('chai').should();
const ModelValidator = require('./../../src/create_job/src/modelvalidator');
const Validator = require("validate");

describe('ModelValidator.run()', () => {
    const schema = {
        id : {
            type: 'number',
            required: true
        },
        name : {
            type: 'string',
            required: false
        }
    };
    const modelValidator = new ModelValidator(schema);
    it('it should handle valid data', done => {
        const data = {id: 1, name: 'nameVal'};
        modelValidator.run(data).then(result => {
            result.should.equal(data);
            done();
        }).catch(err => {
            should.fail();
            done();
        });
    });
    it('it should handle valid data with optional field', done => {
        const data = {id: 1};
        modelValidator.run(data).then(result => {
            result.should.equal(data);
            done();
        }).catch(err => {
            should.fail();
            done();
        });
    });
    it('it should handle invalid data type', done => {
        const data = {id: 'idVal', name: 'nameVal'};
        modelValidator.run(data).then(result =>{
            should.fail();
            done();
        }).catch(err => {
            err.message.length.should.equal(1);
            err.message[0].should.equal('id must be of type number.');
            done();
        });
    });
    it('it should handle missing required field', done => {
        const data = {alias: 'aliasVal', name: 'nameVal'};
        modelValidator.run(data).then(result =>{
            should.fail();
            done();
        }).catch(err => {
            err.message.length.should.equal(1);
            err.message[0].should.equal('id is required.');
            done();
        });
    });
});