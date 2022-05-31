import { ActionType, createAction, createReducer } from "typesafe-actions";

interface QuestionReducer {
    problem: string;
    answer: number;
    quest: string;
    questions: any;
}

const initState: QuestionReducer = {
    problem: "",
    questions: [],
    answer: 0,
    quest: ""
}

export const SET_PROBLEM = 'questionReducer/SET_PROBLEM';

export const setProblem = createAction(SET_PROBLEM)<QuestionReducer>();

export const questionActions = { setProblem };
type QuestionReducerActions = ActionType<typeof questionActions>;

const questionReducer = createReducer<QuestionReducer, QuestionReducerActions>(initState, {
    [SET_PROBLEM]: (state, action) => {
        return ({
            problem: action.payload.problem,
            answer: action.payload.answer,
            quest: action.payload.quest,
            questions: action.payload.questions
        })
    }
})

export default questionReducer;