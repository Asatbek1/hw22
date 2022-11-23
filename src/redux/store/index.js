import { reduser } from "./reducers/reduser";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(reduser, applyMiddleware(thunk));
