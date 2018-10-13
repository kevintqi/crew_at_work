# AWS Lambda Function - Create Job

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"name\":\"John Doe\",\"phoneNumber\":\"1234567\", \"email\":\"y@a.com\"}"
}
```

## Sample REST Request
### URL
POST /customer
```
https://cq7lc4v7id.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:UserPoolIdVal
authorization:AuthorizationVal
```
### Body
```
{  
  "name":"John Doe",
  "phoneNumber":"1234567",
  "email":"y@a.com"
}
```

## Sample Response
### Body
```
{
  "userPoolId": "UserPoolIdVal",
  "customerId": "eUBhLmNvbQ=="
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
