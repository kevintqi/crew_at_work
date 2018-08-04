# AWS Lambda Function - Create User

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "us-west-2_uvLRuYLaz",
    "authorization": "AuthorizationVal"
  }
}
```

## Sample REST Request
### URL
GET /api/v1/user
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
  "jobs": [
    {
      "jobId": "b52ad530-92b1-11e8-8d93-b99efb0ce7dd",
      "location": {
        "zipCode": "90250",
        "state": "California",
        "city": "Hawthorne",
        "street": "357 Doty Ave"
      },
      "schedule": {
        "repeatType": "weekly",
        "startTime": "3:00AM",
        "endTime": "5:00PM",
        "endDate": "2018-05-04",
        "startDate": "2018-05-05"
      },
      "squadId": "us-west-2_uvLRuYLaz",
      "contact": {
        "name": "Mr. X",
        "phoneNumber": "(310) 333 5050"
      }
    },
    {
      "jobId": "e60fcb80-92b9-11e8-acdc-ab85603ff268",
      "location": {
        "zipCode": "90250",
        "state": "California",
        "city": "Hawthorne",
        "street": "357 Doty Ave"
      },
      "schedule": {
        "repeatType": "weekly",
        "startTime": "3:00AM",
        "endTime": "5:00PM",
        "endDate": "2018-05-04",
        "startDate": "2018-05-05"
      },
      "squadId": "us-west-2_uvLRuYLaz",
      "contact": {
        "name": "Mr. X",
        "phoneNumber": "(310) 333 5050"
      }
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
