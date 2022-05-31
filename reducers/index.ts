import { combineReducers } from "redux";
import testReducer from "./testReducer";
import CardReducer from "./cardReducer";
import fieldReducer from "./fieldReducer";
import questionReducer from "./questionReducer";

const rootReducer = combineReducers({
    testReducer,
    CardReducer,
    fieldReducer,
    questionReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;