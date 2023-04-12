import { combineReducers } from "redux";
import userReducer from "./user.reudcer";
import postReducer from "./post.reducer";

export default combineReducers({
  userReducer,
  postReducer,
});
