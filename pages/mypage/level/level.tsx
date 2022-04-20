import { useEffect } from "react";
import styled from "styled-components";
import { COLOR } from "../../../styles/color";

interface Props {
    level: number;
    medal: number;
}

const Level = ({level, medal}:Props) => {
    return(
        <Wrapper>
            <p>LV. {level}</p>
            <div className="medal">
                {
                    [...Array(medal)].map((e, key) => {
                        return(
                            <img key={key} src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/colored-medal.png" alt="" />
                        )
                    })
                }
                {
                    [...Array(20 - medal)].map((e, key) => {
                        return(
                            <img key={key} src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/medal.png" alt="" />
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 80px;
    & p{
        font-size: 22px;
        font-weight: bold;
        color: ${COLOR.second};
        padding-left: 10px;
    }
    margin-left: 50px;

    .medal{

        display: grid;
        grid: '. . . . . . . . . .';
        justify-items: center;
        gap: 8px;
        margin-top: 60px;
        & img{
            width: 50px;
        }
    }
`

export default Level;