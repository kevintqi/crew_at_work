const Sinon = require("sinon");
const should = require("chai").should();
const EventHandler = require("my_util").EventHandler;

describe("EventHandler.constructor()", () => {
  const event = {
    resource: "/api/v1/job",
    path: "/api/v1/job",
    httpMethod: "POST",
    headers: {squadId:"squadIdVal"},
    queryStringParameters: null,
    pathParameters: null,
    stageVariables: null,
    requestContext: {
      path: "/api/v1/job",
      accountId: "715785983816",
      resourceId: "7xrtnn",
      stage: "test-invoke-stage",
      requestId: "test-invoke-request",
      identity: {
        cognitoIdentityPoolId: null,
        cognitoIdentityId: null,
        apiKey: "test-invoke-api-key",
        cognitoAuthenticationType: null,
        userArn: "arn:aws:iam::715785983816:root",
        apiKeyId: "test-invoke-api-key-id",
        userAgent: "aws-internal/3",
        accountId: "715785983816",
        caller: "715785983816",
        sourceIp: "test-invoke-source-ip",
        accessKey: "ASIAIHW35MOGUHXSCESA",
        cognitoAuthenticationProvider: null,
        user: "715785983816"
      },
      resourcePath: "/api/v1/job",
      httpMethod: "POST",
      extendedRequestId: "test-invoke-extendedRequestId",
      apiId: "4s3eofq8j5"
    },
    body: "{\"name\":\"nameVal\"}",
    isBase64Encoded: false
  };
  const callback = (err, data) => {};
  const eventHandler = new EventHandler(event, callback);
  it("it should create headers", done => {
    eventHandler.headers.squadId.should.equal('squadIdVal');
    done();
  });
  it("it should create inputData", done => {
    eventHandler.inputData.name.should.equal('nameVal');
    done();
  });
  it("it should create response", done => {
    should.exist(eventHandler.response);
    done();
  });
});
describe("EventHandler methods", () => {
    const callback = (err, data) => {};
    const eventHandler = new EventHandler({}, callback);
    it("it should set statusCode",() => {
        eventHandler.status(200);
        eventHandler.response.statusCode.should.equal(200); 
    });
    it("it should convert data to string then send it",() => {
        eventHandler.status(200).send({a: 5});
        eventHandler.response.statusCode.should.equal(200);
        should.exist(eventHandler.response.body);
        eventHandler.response.body.should.equal('{\"a\":5}');
    });
    it("it should send empty data",() => {
        eventHandler.status(200).send();
        should.exist(eventHandler.response.body);
        eventHandler.response.body.should.equal('{}');
    });
    it("it should call callback",() => {
        const spy = Sinon.spy(callback);
        const handler = new EventHandler({}, spy);
        handler.status(200).send({a: 5});
        spy.called.should.equal(true);
        spy.calledWithExactly(null, handler.response);
    });
});