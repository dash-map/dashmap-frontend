import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../reducers";
import { TO_NEXT_QUEST } from "../../../reducers/cardReducer";
import { COLOR } from "../../../styles/color";

const Question = () => {

    const {problem, questions, quest, answer} = useSelector((state: RootState) => state.questionReducer);
    const [state, setState] = useState(false);
    const {field} = useSelector((state: RootState) => state.fieldReducer);
    const [next, setNext] = useState<any>();
    const router = useRouter();

    useEffect(() => {
        setNext(localStorage.getItem(field));
        
    }, [field])

    const nextQuest = () => {
        localStorage.setItem(field, (parseInt(next) + 1).toString())
        router.reload();
    }

    const check = (e: number) => {
        if(e + 1 == answer) {
            alert("맞았습니다");
            setState(true);
        }else{
            alert("다시 공부해 오세요.")
        }
    }

    return(
        <Wrapper>
            <p className="title">{quest}</p>
            <div className="middle">
                <p className="question">Q. {problem}</p>
                <div className="answerWrapper">
                    <div className="top">
                        {
                            questions.map((e: any, index: number) => {
                                return(
                                    <button key={index} disabled={state} onClick={() => {check(index)}} className="answer">{index + 1}. {questions[index].question}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button disabled={!state} onClick={nextQuest} >다음 퀘스트</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 50%;
    height: 480px;
    border: 1px solid #ececec;
    border-radius: 7px;
    box-shadow: 0px 0px 10px #C8C8C8;
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    position: relative;

    .title{
        font-size: 25px;
        color: #ABABAB;
        margin: 20px;
    }

    .middle{   
        margin-left: 10%;
        margin-top: -80px;
        .question{
            font-size: 27px;
        }
    }

    .answerWrapper {
        .top{
            display: grid;
            grid: ". .";
            .answer{
                margin-top: 20px;
                width: 90%;
                background: none;
                color: ${COLOR.second};
                border: 1px solid ${COLOR.second};
            }
        }

        .answer:hover{
            background: ${COLOR.second};
            color: white;
        }

        .answer:active{
            background: #e76081;
            border: 1px solid #e76081;
        }

        .answer:disabled{
            border: 1px solid #febccd;
            color: #febccd;
        }

        .answer:hover:disabled{
            background: none;
            cursor: not-allowed;
        }
    }

    .bottom{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    & button{
        width: 150px;
        height: 35px;
        border: none;
        background: ${COLOR.main};
        color: white;
        border-radius: 5px;
        margin-top: -50px;
        margin-right: 20px;
    }

    & button:disabled{
        background: #ffdd99;
        cursor: not-allowed;
    }
`

export default Question;