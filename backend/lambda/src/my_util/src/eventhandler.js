class EventHandler {
  constructor(event, callback) {
    this.request = event;
    this.headers = event.headers;
    this.inputData = event.body ? JSON.parse(event.body) : {};
    this.response = {};
    this.callback = callback;
  }

  status(code) {
    this.response.statusCode = code;
    return this;
  }
  
  send(data) {
    const body = data ? data : {};
    this.response.body = JSON.stringify(body);
    this.callback(null, this.response);
  }
}

module.exports = EventHandler;
