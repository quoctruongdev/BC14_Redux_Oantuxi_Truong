import { combineReducers } from "redux";
import userReducer from "../../game-oantuxi/modules/reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
