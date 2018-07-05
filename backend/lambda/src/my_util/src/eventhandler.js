class EventHandler {
  constructor(event, callback) {
    console.log(event);
    this.request = event;
    this.headers = event.headers || {};
    this.path = event.pathParameters || {};
    this.query = event.queryStringParameters || {};
    this.inputData = event.body ? JSON.parse(event.body) : {};
    this.response = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "squadId"
      }
    };
    this.callback = callback;
  }

  status(code) {
    this.response.statusCode = code;
    return this;
  }

  send(data) {
    const body = data || {};
    this.response.body = JSON.stringify(body);
    console.log(this.response);
    this.callback(null, this.response);
  }
}

module.exports = EventHandler;
