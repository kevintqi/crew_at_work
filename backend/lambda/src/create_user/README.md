# AWS Lambda Function - Create User

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "us-west-2_uvLRuYLaz",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"name\":\"John Doe\",\"phoneNumber\":\"1234567\",\"email\":\"x@y.com\",\"role\":\"manager\",\"gender\":\"male\"}"
}
```

## Sample REST Request
### URL
POST /api/v1/user
```
https://4s3eofq8j5.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:us-west-2_uvLRuYLaz
authorization:AuthorizationVal
```
### Body
```
{  
    "name":"John Doe",
    "phoneNumber":"1234567",
    "email":"a@y.com",
    "role":"manager",
    "gender":"male"
}
```

## Sample Response
### Body
```
{
  "User": {
    "Username": "3f6190c8-3b5d-4ab7-a592-652a384cec56",
    "Attributes": [
      {
        "Name": "sub",
        "Value": "3f6190c8-3b5d-4ab7-a592-652a384cec56"
      },
      {
        "Name": "gender",
        "Value": "male"
      },
      {
        "Name": "name",
        "Value": "John Doe"
      },
      {
        "Name": "phone_number",
        "Value": "+11234567"
      },
      {
        "Name": "email",
        "Value": "a@y.com"
      }
    ],
    "UserCreateDate": "2018-08-04T02:44:56.659Z",
    "UserLastModifiedDate": "2018-08-04T02:44:56.659Z",
    "Enabled": true,
    "UserStatus": "FORCE_CHANGE_PASSWORD"
  }
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
