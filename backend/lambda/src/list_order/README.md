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
GET /custome/eUBhLmNvbQ==
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
      "createdAt": 1539472059696,
      "materials": [
        {
          "promotionCode": "d5",
          "style": "Delux",
          "amount": 200,
          "category": "Chair"
        },
        {
          "category": "Tent",
          "style": "Delux",
          "amount": 50
        }
      ],
      "event": {
        "name": "LA Jazz Festival",
        "schedule": {
          "endDate": "none",
          "startDate": "none"
        },
        "location": {
          "zipCode": "90501",
          "state": "CA",
          "city": "Torrance",
          "street": "123 Main St"
        },
        "info": "2017 LA Jazz Festival at Hollywood Bowl"
      },
      "orderId": "c81a6300-cf3c-11e8-b5c2-db55c339a89a",
      "customerId": "eUBhLmNvbQ==",
      "userPoolId": "UserPoolIdVal"
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
