import { NextPage } from "next";
import styled from "styled-components";
import Header from "./header";
import Order from "./order/order";
import Card from "./card/card";
import Question from "./question/qustion";
import Status from "./status/status";
import { GlobalStyle } from "../../styles/globalStyle";
import { useEffect, useState } from "react";
import { requestWithAccessToken } from "../../utils/axios/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { fieldActions } from "../../reducers/fieldReducer";
import { useDispatch } from "react-redux";
import { questionActions } from "../../reducers/questionReducer";
import { useRouter } from "next/router";


interface Props {
    userId: string | any;
    quest: string | any;
    field: string | any;
}

const Main: NextPage = () => {

    const {field} = useSelector((state: RootState) => state.fieldReducer);
    const {problem, answer, quest, questions} = useSelector((state: RootState) => state.questionReducer)
    const dispatch = useDispatch();
    const router = useRouter();

    const [state, setState] = useState<Props>({
        userId: "",
        quest: "",
        field: "",
    });
    

    useEffect(() => {
        dispatch(fieldActions.setField({field: localStorage.getItem("field")}))
        setState({
            field: localStorage.getItem("field"),
            userId: localStorage.getItem("userId"),
            quest: localStorage.getItem(field)
        })
    }, [field]);

    useEffect(() => {
        console.log(state)
        requestWithAccessToken({
            method: "POST",
            url: "/quest",
            headers: {},
            data: {
                "userId": parseInt(state.userId),
                "field": state.field,
                "quest": parseInt(state.quest),
            }
        }).then((res) => {
            console.log(res);
            dispatch(questionActions.setProblem({
                problem: res.data.problem,
                answer: res.data.answer,
                quest: res.data.quest,
                questions: res.data.questions
            }))
        }).catch((err) => {
            console.log(err);
        })
    }, [state])

    return(
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <div className="main">
                    <Order />
                    <Question />
                    <Card />
                    <Status />
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    .main{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default Main;