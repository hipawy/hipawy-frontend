import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const composeEnhancers = composeWithDevTools({});

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
