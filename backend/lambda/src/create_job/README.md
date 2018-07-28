# AWS Lambda Function - Create Job

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"contact\":{\"name\":\"John Doe\",\"phoneNumber\":\"1234567\"},\"location\":{\"street\":\"123 Main St\",\"city\":\"Torrance\",\"zipCode\":\"90501\", \"state\":\"CA\"},\"schedule\":{\"repeatType\":\"none\"}}"
}
```

## Sample REST Request
### URL
POST /api/v1/job
```
https://4s3eofq8j5.execute-api.us-west-2.amazonaws.com/dev
```
### Headers
```
user-pool-id:UserPoolIdVal
authorization:AuthorizationVal
```
### Body
```
{  
  "contact":{  
    "name":"John Doe",
    "phoneNumber":"1234567"
  },
  "location":{  
    "street":"123 Main St",
    "city":"Torrance",
    "zipCode":"90501",
    "state":"CA"
  },
  "schedule":{  
    "repeatType":"none"
  }
}
```

## Sample Response
### Body
```
{
  "squadId": "UserPoolIdVal",
  "jobId": "50894b70-9289-11e8-9b92-8b3960438cd3"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
