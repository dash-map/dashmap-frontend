import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../reducers";
import { TO_NEXT_QUEST } from "../../../reducers/cardReducer";
import { COLOR } from "../../../styles/color";

interface Props{
    quest: string;
    question: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
    answer_4: string;
}


const Question = () => {

    const {goQuestion} = useSelector((state: RootState) => state.CardReducer);

    const dispatch = useDispatch();

    const [rotate, setRotate] = useState(180);

    const [state, setState] = useState<Props>({
        quest: "HTTP",
        question: "HTTP의 약자는 무엇인가요?",
        answer_1: "Hyper Text Markup Language",
        answer_2: "Hyper Text Markup Language",
        answer_3: "Hyper Text Markup Language",
        answer_4: "Hyper Text Markup Language"
    });

    const {quest, answer_1, answer_2, answer_3, answer_4} = state;

    useEffect(() => {
        if(goQuestion === true) {
            setRotate(0);
        }
        else{
            setRotate(180);
        }   
    }, [goQuestion]);

    const nextQuest = () => {
        setRotate(180);
        dispatch({
            type: TO_NEXT_QUEST
        });

    }


    return(
        <Wrapper style={{transform: `rotateY(${rotate}deg)`, transition: '.4s', zIndex: `-${rotate}` }}>
            <p className="title">{quest}</p>
            <div className="middle">
                <p className="question">Q. {state.question}</p>
                <div className="answerWrapper">
                    <div className="top">
                        <button className="answer">{answer_1}</button>
                        <button className="answer">{answer_2}</button>
                    </div>
                    <div className="bottom">
                        <button className="answer">{answer_3}</button>
                        <button className="answer">{answer_4}</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <button onClick={nextQuest} >다음 퀘스트</button>
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
            display: flex;
            .answer{
                margin-top: 20px;
                width: 70%;
                background: none;
                color: ${COLOR.second};
                border: 1px solid ${COLOR.second};
            }
        }
        .bottom{ 
            display: flex;
            .answer{
                width: 70%;
                margin-top: 20px;
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
`

export default Question;