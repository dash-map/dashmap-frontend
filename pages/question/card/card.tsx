import { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../../styles/color";

interface Props{
    quest: string;
    number: number;
}

const Card = () => {

    const [state, setState] = useState<Props>({
        quest: "HTTP",
        number: 10
    });

    const { quest, number} = state;

    return(
        <Wrapper>
            <p className="no">question #{number}</p>
            <p className="quest">{quest}</p>
            <div className="solve">
                <button>문제풀기</button>
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
        margin-top: 50px;
    }

    .solve{
        width: 100%;
        display: flex;
        justify-content: flex-end;

        & button{
            padding: 10px 50px;
            background: ${COLOR.main};
            color: ${COLOR.white};
            border: none;
            border-radius: 5px;
            margin-right: 40px;
        }
    }
`

export default Card;