import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";
import { userReducer } from "./user/userReducer";
const rootReducers = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  users: userReducer,
});
export default rootReducers;
