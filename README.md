# crew_at_work

## REST APIs
### POST /api/v1/job
Create a new Job and save it to database.

#### Request Body
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
####Response Body
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