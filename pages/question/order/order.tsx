import { useRouter } from "next/router";
import { FC, useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../../styles/color";

interface Props{
    type: string;
}

const Order = () => {

    const router = useRouter();

    const [order, setOrder] = useState<Props>({
        type: "FRONT_END",
    });


    return(
        <Wrapper>
            <div className="left">
                <p className="title">THE STACK</p>
                <p className="type">{order.type} ROADMAP</p>
                <button onClick={() => {router.push("/roadmap")}}>로드맵 전체보기</button>
            </div>
            <div className="right">
                <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    top: 70px;
    left: 40px;
    position: absolute;


    .left{
        display: flex;
        flex-direction: column;

        & p{
            margin-bottom: 15px;
        }
        .title{
            color: #B4B4B4;
            font-weight: bold;
        }

        .type{
            font-weight: bold;
        }

        & button {
            border: 1px solid ${COLOR.main};
            color: ${COLOR.main};
            background: none;
            padding: 5px 20px;
            border-radius: 3px;
        }
    }

    .right{
        margin-left: 30px;
        width: 95px;
        border-radius: 50%;
        background: linear-gradient(#FFD074, #F9A296);
        height: 95px;
        display: flex;
        justify-content: center;
        align-items: center;

        & img{
            width: 65px;
        }
    }
`

export default Order;