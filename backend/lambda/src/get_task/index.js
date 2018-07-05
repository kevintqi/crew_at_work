import { EventHandler } from "my_util";
import { ModelValidator as Validator } from "my_util";
import TaskCreator from "./src/taskgetter";
import eventHeaderModel from "./src/data/eventheader.json";
const validator = new Validator(eventHeaderModel);
const taskGetter = new TaskCreator();

export function handler(event, context, callback) {
  const eventHandler = new EventHandler(event, callback);
  validator
    .run(eventHandler.path)
    .then(eventHandler => {
      return taskCreator
        .run(validData)
        .then(data => eventHandler.status(200).send(data))
        .catch(err => eventHandler.status(500).send(err));
    })
    .catch(err => eventHandler.status(400).send(err));
}
