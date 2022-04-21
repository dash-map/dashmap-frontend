import { ActionType, createAction, createReducer } from "typesafe-actions";

interface CardReducer {
    goQuestion: boolean;
    goNextQuest: boolean;
}

const initState: CardReducer = {
    goQuestion: false,
    goNextQuest: false,
}

export const TO_QUESTION = 'cardReducer/TO_QUESTION';
export const TO_NEXT_QUEST = 'cardReducer/TO_NEXT_QUEST';

export const toQuestion = createAction(TO_QUESTION)<CardReducer>();
export const toNextQuest = createAction(TO_NEXT_QUEST)<CardReducer>();

export const actions = { toQuestion, toNextQuest };
type CardReducerActions = ActionType<typeof actions>;

const cardReducer = createReducer<CardReducer, CardReducerActions>(initState, {
    [TO_QUESTION]: (state, action) => {
        return ({
            goQuestion: true,
            goNextQuest: false,
        })
    },
    [TO_NEXT_QUEST]: (state, action) => {
        return ({
            goNextQuest: true,
            goQuestion: false
        })
    }
});

export default cardReducer;