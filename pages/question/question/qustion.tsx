import styled from "styled-components";
import { COLOR } from "../../../styles/color";

const Question = () => {
    return(
        <Wrapper>
            <p className="title">HTTP</p>
            <div className="middle">
                <p className="question">Q. HTTP는 무엇의 약자일까요?</p>
                <input type="text" />
            </div>
            <div className="bottom">
                <button>다음 퀘스트</button>
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
    justify-content: space-between;

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