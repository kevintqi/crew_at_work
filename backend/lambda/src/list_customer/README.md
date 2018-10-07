# AWS Lambda Function - List Customers

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  }
}
```

## Sample REST Request
### URL
GET /api/v1/customer
```
https://4s3eofq8j5.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:us-west-2_uvLRuYLaz
authorization:AuthorizationVal
```

## Sample Response
### Body
```
{
  "customers": [
     {
       "phoneNumber":"1234567",
       "email":"y@a.com",
       "name":"John Doe",
       "userPoolId":"UserPoolIdVal"
      },
      {
         "phoneNumber":"1234567",
         "email":"y@b.com",
         "name":"John Doe",
         "userPoolId":"UserPoolIdVal"
      }
  ]
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
