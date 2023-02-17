import { combineReducers } from "redux";
import allergyReducer from "./allergies";
import diagnoReducer from "./Diagnosis";
import medReducer from "./medicine";
import userReducer from "./user";
import documentReducer from "./document";

const rootReducer = combineReducers({
    allergyReducer:allergyReducer,
    diagnoReducer: diagnoReducer,
    userReducer:userReducer,
    medReducer:medReducer,
    documentReducer:documentReducer
})

export default rootReducer;