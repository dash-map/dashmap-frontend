import { useEffect, useState } from "react";
import styled from "styled-components"
import { COLOR } from "../../../styles/color";

interface Props {
    email: string | null;
    imageUrl: string | undefined;
    name: string | null;
}

const User = () => {

    const [state, setState] = useState<Props>({
        email: "",
        imageUrl: "",
        name: "",
    });

    const {email, imageUrl, name} = state;

    useEffect(() => {
        setState({
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            imageUrl: localStorage.getItem('imageUrl') || ''
        });
    }, []);

    return(
        <Wrapper>
            <div className="profile">
                {
                    email !== null ? 
                        <img src={imageUrl} alt="" />
                            :
                        <img style={{width: 170, height: 170, borderRadius: 0}} src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
                }
            </div>
            <div className="info">
                {
                    name !== null ? 
                    <>
                        <p className="userName">{name}</p>  
                        <p className="email">{email}</p>
                    </>
                    :
                    <>
                        <p className="userName">fuck u</p>  
                        <p className="email">getoutofhere@sex.com</p>
                    </>
                }
                <ul>
                    <div className="top">
                        <li>Frontend Master</li>
                        <li>Backend Master</li>
                        <li>iOS Master</li>
                    </div>
                    <div className="bottom">
                        <li>Android Master</li>
                        <li>AI Master</li>
                    </div>
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
            width: 240px;
            height: 240px;
            border-radius: 50%;
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
            gap: 10px;  
            .top{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
            .bottom{
                display: flex;
                flex-direction: column;
                gap: 5px;
                margin-left: 20px;
            }
        }
    }

`

export default User;