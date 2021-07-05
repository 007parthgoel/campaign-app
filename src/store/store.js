import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
