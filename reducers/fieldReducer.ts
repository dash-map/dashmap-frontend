import { ActionType, createAction, createReducer } from "typesafe-actions";

interface FieldReducer {
    field: string;
}

const initState: FieldReducer = {
    field: ""
}

export const SET_FIELD = 'fieldReducer/SET_FIELD';

export const setField = createAction(SET_FIELD)<FieldReducer>();

export const actions = { setField };
type FieldReducerActions = ActionType<typeof actions>;

const fieldReducer = createReducer<FieldReducer, FieldReducerActions>(initState, {
    [SET_FIELD]: (state, action) => {
        return ({
            field: action.payload.field
        })
    }
})

export default fieldReducer;