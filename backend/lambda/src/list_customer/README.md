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
GET /customer
```
https://cq7lc4v7id.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:UserPoolIdVal
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
