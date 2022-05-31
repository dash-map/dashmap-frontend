import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../reducers";
import { TO_QUESTION } from "../../../reducers/cardReducer";
import { COLOR } from "../../../styles/color";

const Card = () => {
    const { goQuestion} = useSelector((state: RootState) => state.CardReducer);
    const {quest} = useSelector((state: RootState) => state.questionReducer);
    const {field} = useSelector((state: RootState) => state.fieldReducer)
    const dispatch = useDispatch();
    const [state, setState] = useState("");
    const [rotate, setRotate] = useState(0);

    const change = () => {
       dispatch({
           type: TO_QUESTION
       })
    }

    useEffect(() => {
        setState(localStorage.getItem(field) || '');
    }, [field]);
    
    useEffect(() => {
        if(goQuestion === true){
            setRotate(180);
        }else{
            setRotate(0);
        }
    }, [goQuestion])

    return(
        <Wrapper style={{transform: `rotateY(${rotate}deg)`, transition: '.4s', zIndex: `-${rotate}`, }}>
            <p className="no">question #{state}</p>
            <p className="quest">{quest}</p>
            <div className="solve">
                <button onClick={change}>문제풀기</button>
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
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    position: absolute;
    margin-bottom: 60px;

    .no{
        width: 100%;
        text-align: start;
        margin-left: 20px;
        font-size: 24px;
        font-weight: bold;
        margin-top: -10px;
        color: ${COLOR.second}
    }

    .quest{
        font-size: 90px;
        color: #ABABAB;
        margin-top: 0px;
    }

    .solve{
        width: 100%;
        display: flex;
        justify-content: flex-end;

        & button{
            padding: 6px 50px;
            background: ${COLOR.main};
            color: ${COLOR.white};
            border: none;
            border-radius: 5px;
            margin-bottom: -40px;
            margin-right: 20px;
        }
    }
`

export default Card;