/*
{ "resource": "/api/v1/job", 
   "path": "/api/v1/job", 
   "httpMethod": "POST", 
   "headers": null, 
   "queryStringParameters": null, 
   "pathParameters": null, 
   "stageVariables": null, 
   "requestContext": { 
       "path": "/api/v1/job", 
       "accountId": "715785983816", 
       "resourceId": "7xrtnn", 
       "stage": "test-invoke-stage", 
       "requestId": "test-invoke-request", 
       "identity": { 
           "cognitoIdentityPoolId": null, 
           "cognitoIdentityId": null, 
           "apiKey": "test-invoke-api-key", 
           "cognitoAuthenticationType": null, 
           "userArn": "arn:aws:iam::715785983816:root", 
           "apiKeyId": "test-invoke-api-key-id", 
           "userAgent": "aws-internal/3", 
           "accountId": "715785983816", 
           "caller": "715785983816", 
           "sourceIp": "test-invoke-source-ip", 
           "accessKey": "ASIAIHW35MOGUHXSCESA", 
           "cognitoAuthenticationProvider": null, 
           "user": "715785983816" 
        }, 
        "resourcePath": "/api/v1/job", 
        "httpMethod": "POST", 
        "extendedRequestId": "test-invoke-extendedRequestId", 
        "apiId": "4s3eofq8j5" 
    }, 
    "body": "{}", 
    "isBase64Encoded": false 
}
*/
class EventHandler {
  constructor(event, callback) {
    this.request = event;
    this.headers = event.headers;
    this.inputData = JSON.parse(event.body);
    this.response = {};
    this.callback = callback;
  }

  status(code) {
    this.response.statusCode = code;
    return this;
  }
  
  send(data) {
    this.response.body = JSON.stringify(data);
    this.callback(null, this.response);
  }
}

module.exports = EventHandler;
