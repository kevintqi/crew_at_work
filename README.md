# crew_at_work

## REST APIs
### POST /api/v1/job
Create a new Job and save it to database.
#### Request Body Schema
```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Job",
  "description": "A job created based on customer request",
  "type": "object",
  "properties": {
    "squadId": {
      "description": "The unique identifier for a squad",
      "type": "string"
    },
    "contact": {
      "description": "Contact information of the customer",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "phoneNumber": {
          "type": "string"
        }
      },
      "required": ["name", "phoneNumber"]
    },
    "location": {
      "description": "Location where the job is performed",
      "type": "object",
      "properties": {
        "street": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "zipCode": {
          "type": "string"
        },
        "state": {
          "type": "string"
        }
      },
      "required": ["street", "state"]
    },
    "schedule": {
      "description": "Time information on when the job should be performed",
      "type": "object",
      "properties": {
        "repeatType": {
          "description": "monthly, weekly, daily, etc",
          "type": "string"
        },
        "startDate": {
          "description": "The earliet date the job should be scheduled",
          "type": "string"
        },
        "endDate": {
          "description": "The latest date the job should be scheduled",
          "type": "string"
        },
        "startTime": {
          "description": "The earlist time of the day the job should be started",
          "type": "string"
        },
        "endTime": {
          "description": "The latest time of the day the job should be ended",
          "type": "string"
        }
      },
      "required": ["repeatType"]
    }
  },
  "required": ["squadId", "contact", "location", "schedule"]
}
```
#### Sample Request Body
```json
{
    "squadId": "some kind of uuid",
    "contact": {
        "name": "someOne",
        "phoneNumber": "3103335050"
    },
    "location": {
        "street": "17985 Pacific Coast Hwy",
        "city": "Torrance",
        "state": "CA",
        "zipCode": "90272"
    },
    "schedule": {
        "repeatType" : "weekly",
        "startDate" : "2018-04-18",
        "endDate": "2019-04-18",
        "startTime" : "8am",
        "endTime": "9am"
    }
}
```
#### Response Body
```json
{
    "squadId":"some kind of uuid",
    "jobId":"fcf73f20-4365-11e8-a934-837d699cb92b"
}
```
### GET /api/v1/job
Get all jobs for the squad.

#### Request Header
```key-value
squadId:squadIdVal
```