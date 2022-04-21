import { combineReducers } from "redux";
import testReducer from "./testReducer";
import CardReducer from "./cardReducer";

const rootReducer = combineReducers({
    testReducer,
    CardReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;