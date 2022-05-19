import { combineReducers } from "redux";
import testReducer from "./testReducer";
import CardReducer from "./cardReducer";
import fieldReducer from "./fieldReducer";

const rootReducer = combineReducers({
    testReducer,
    CardReducer,
    fieldReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;