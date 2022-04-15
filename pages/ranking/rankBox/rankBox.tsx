import { useState } from "react";
import FieldBox from "./fieldBox/filedBox";
import styled from "styled-components";


interface Props {
    name: string;
    email: string;
    level: number;
    done: {
        fe: boolean;
        be: boolean;
        aos: boolean;
        ios: boolean;
        ai: boolean;
    }
};

const RankBox = () => {

    const [state, setState] = useState<Props>({
        name: "손윤석",
        email: "thsdbstjr@gmail.com",
        level: 523,
        done: {
            fe: true,
            be: false,
            aos: false,
            ios: false,
            ai: false,
        }
    });

    const {name, email, level, done} = state;

    return(
        <Wrapper>
            <div className="user">
                <div className="back">
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
                </div>
                <div className="right">
                    <p className="name">{name}</p>
                    <p className="email">{email}</p>
                </div>
            </div>
            <div className="level">
                <p>lv. {level}</p>
            </div>
            <div className="crown">
                <FieldBox field={"FE"} done={false} />
                <FieldBox field={"BE"} done={true} />
                <FieldBox field={"AOS"} done={true} />
                <FieldBox field={"iOS"} done={false} />
                <FieldBox field={"AI"} done={false} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    border: 1px solid #e5e5e5;
    height: 70px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px #BDBDBD;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    p {
        margin: 0;
    }

    .user{
        margin-left: 10px;
        align-items: center;

        .back{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(#FFD074, #F9A296);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 15px;
        }
        & img{
            width: 35px;
            height: 35px;
        }
        display: flex;

        .right{
            .name{
                color: #F27A6A;
                font-size: 18px;
            }
            .email{
                color: #B1B1B1;
                font-size: 14px;
            }
        }
    }

    .level{
        color: #F27A6A;
    }

    .crown{
        display: flex;
        gap: 20px;
        padding-right: 20px;
    }
`

export default RankBox;