import styled from "styled-components"
import { COLOR } from "../../../styles/color";

const User = () => {
    return(
        <Wrapper>
            <div className="profile">
                <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
            </div>
            <div className="info">
                <p className="userName">손윤석</p>
                <p className="email">thsdbstjr@gmail.com</p>
                <ul>
                    <li>Frontend Master</li>
                    <li>Backend Master</li>
                    <li>iOS Master</li>
                    <li>Android Master</li>
                    <li>AI Master</li>
                </ul>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background: #424242;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    .profile{
        width: 240px;
        height: 240px;
        margin-left: -8%;
        background: linear-gradient(#FFD074, #F9A296);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        & img{
            width: 170px;
        }
    }

    .info{
        & p{
            margin: 0;
        }
        gap: 10px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        color: ${COLOR.white};
        .userName{
            font-size: 20px;
            font-weight: bold;
        }

        .email{
            color: #D8D8D8;
        }

        & ul{
            margin: 0;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }

`

export default User;