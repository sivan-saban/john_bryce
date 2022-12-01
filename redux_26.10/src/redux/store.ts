import { combineReducers } from "redux";
import { authReducer } from "./authState";
import { configureStore} from "@reduxjs/toolkit"
import { coinReducer } from "./coinState";
//איחוד כל הרדיוסרים
const reducers = combineReducers({coinState:coinReducer,authState:authReducer});
//החצנה של סטור ושמירה של כל הרדיוסרים במשתנה סטור
export const store = configureStore({reducer:reducers});


