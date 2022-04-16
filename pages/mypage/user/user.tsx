import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import FieldBox from "../filedBox/fieldBox";

const User = () => {
    return(
        <Wrapper>
            <div className="profileImg">
                <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
            </div>
            <div className="info">
                <p>NAME: &nbsp;&nbsp;<span>손윤석</span></p>
            </div>
            <div className="stack">
                <div className="top">
                    <FieldBox field={"FE"} done={false} />
                    <FieldBox field={"BE"} done={true} />
                    <FieldBox field={"AOS"} done={false} />
                </div>
                <div className="bottom">
                    <FieldBox field={"iOS"} done={true} />
                    <FieldBox field={"AI"} done={false} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;    

    .profileImg{
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(#FFD074, #F9A296);
        border-radius: 50%;
        & img{
            width: 190px;
        }
    }

    .info{
        & p{
            font-size: 20px;
            color: ${COLOR.main};
            font-weight: bold;
            & span{
                color: black;
                font-size: 16px;
                font-weight: normal;
            }
        }
    }

    .stack{
        display: flex;
        flex-direction: column;
        align-items: center;

        .top{
            display: flex;
            gap: 10px;
        }

        .bottom{
            display: flex;
            gap: 10px;
        }
    }
`


export default User;