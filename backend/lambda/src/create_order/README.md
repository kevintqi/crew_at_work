# AWS Lambda Function - Create Order

## Sample Test Event
```
{
  "headers": {
    "user-pool-id": "UserPoolIdVal",
    "authorization": "AuthorizationVal"
  },
  "body": "{\"customerId\":\"y@a.com\",\"event\":{\"name\":\"LA Jazz Festival\",\"info\":\"2017 LA Jazz Festival at Hollywood Bowl\",\"location\":{  \"street\":\"123 Main St\",\"city\":\"Torrance\",\"zipCode\":\"90501\", \"state\":\"CA\"},\"schedule\":{  \"startDate\":\"none\", \"endDate\": \"none\"}},\"materials\": [{\"category\": \"Chair\",\"style\": \"Delux\",\"amount\": 200,\"promotionCode\": \"d5\"},{ \"category\": \"Tent\",\"style\": \"Delux\", \"amount\": 50 }]}"
}
```

## Sample REST Request
### URL
POST /order
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
  "customerId":"eUBhLmNvbQ==",
  "event":{  
    "name":"LA Jazz Festival",
    "info":"2017 LA Jazz Festival at Hollywood Bowl",
    "location":{  
      "street":"123 Main St",
      "city":"Torrance",
      "zipCode":"90501",
      "state":"CA"
    },
    "schedule":{  
      "startDate":"none",
      "endDate": "none"
    }
  },
  "materials": [
    {
      "category": "Chair",
      "style": "Delux",
      "amount": 200,
      "promotionCode": "d5"
    },
    {
      "category": "Tent",
      "style": "Delux",
      "amount": 50
    }
  ]
}
```

## Sample Response
### Body
```
{
  "userPoolId": "UserPoolIdVal",
  "orderId": "c81a6300-cf3c-11e8-b5c2-db55c339a89a"
}
```
## Status Code
Code | Description | Body
------------ | ------------- | -----------
200 | OK | Data
400 | Bad Request | Error
500 | Internal Server Error |Error
