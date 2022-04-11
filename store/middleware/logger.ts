import { Middleware } from "redux";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Logging", action);

  next(action);
};

export default logger;
