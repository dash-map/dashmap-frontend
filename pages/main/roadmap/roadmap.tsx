import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {useRouter} from "next/router";
import { actions} from "../../../reducers/fieldReducer";
import { COLOR } from "../../../styles/color";


interface  Props{
    type: string;
    progress: number;
}

const Roadmap = ({type, progress}: Props) => {

    const router = useRouter();

    const dispatch = useDispatch();

    const changeField = (e: any) => {
        switch(e) {
            case "Frontend Roadmap":
                dispatch(actions.setField({field: "fe"}))
                break;
            case "Backend Roadmap":
                dispatch(actions.setField({field: "be"}))
                break;
            case "iOS Roadmap":
                dispatch(actions.setField({field: "ios"}))
                break;
            case "Android Roadmap":
                dispatch(actions.setField({field: "aos"}))
                break;
            case "AI Roadmap":  
                dispatch(actions.setField({field: "fai"}))
                break;
            default: 
                return;
        }
    }

    return(
        <Wrapper onClick={() => {changeField(type); router.push("/question") }}>
            <div className="box">
                <p>{type}</p>
                <div className="proCon">
                    <div style={{width: `${progress}%`}} className="prog"></div>
                </div>
                <p style={{color: `${COLOR.main}`}}>{progress}%</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: 20px;
    cursor: pointer;
    & :hover{
        transform: scale(1.05);
        transition: .2s;
        & p{
            transform: scale(1.05);
            transition: .2s;
        }
        .proCon{
            .prog{
                transform: scale(1.05);
                transition: .2s;
            }
            transform: scale(1.05);
            transition: .2s;
        }
    }
    .box{
        width: 300px;
        height: 190px;
        border: 1px solid #D0D0D0;
        box-shadow: 3px 10px 10px #A9A9A9;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: ${COLOR.black};
    }

    .proCon{
        width: 80%;
        height: 17px;
        border-radius: 10px;
        background: #D8EEFF;

        .prog{
            height: 17px;
            border-radius: 10px;
            background: #FF7C6A;
        }
    }
`

export default Roadmap;