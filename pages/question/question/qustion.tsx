import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../reducers";
import { TO_NEXT_QUEST } from "../../../reducers/cardReducer";
import { COLOR } from "../../../styles/color";


const Question = () => {

    const {goQuestion, goNextQuest} = useSelector((state: RootState) => state.CardReducer);

    const dispatch = useDispatch();

    const [rotate, setRotate] = useState(180);

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
            <p className="title">HTTP</p>
            <div className="middle">
                <p className="question">Q. HTTP는 무엇의 약자일까요?</p>
                <input type="text" />
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
        & input{
            width: 70%;
            border: none;
            border-bottom: 1px solid ${COLOR.main};
            text-indent: 10px;
            font-size: 20px;
            margin-top: 30px;
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