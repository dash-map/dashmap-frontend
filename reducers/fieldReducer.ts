import { ActionType, createAction, createReducer } from "typesafe-actions";

interface FieldReducer {
    field: string | any;
}

const initState: FieldReducer = {
    field: ""
}

export const SET_FIELD = 'fieldReducer/SET_FIELD';

export const setField = createAction(SET_FIELD)<FieldReducer>();

export const fieldActions = { setField };
type FieldReducerActions = ActionType<typeof fieldActions>;

const fieldReducer = createReducer<FieldReducer, FieldReducerActions>(initState, {
    [SET_FIELD]: (state, action) => {
        return ({
            field: action.payload.field
        })
    }
})

export default fieldReducer;