import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR } from "../styles/color";
import { GlobalStyle } from "../styles/globalStyle";
import Link from 'next/link';

const signin = () => {

    const GITHUB_LOGIN_URI = 'https://github.com/login/oauth/authorize';
    const CLIENT_ID = `client_id=e478d9cea0fa33472386`;
    // const REDIRECT_URI = `redirect_uri=http://localhost:3000/oauth/github`;
    const LOGIN_URI = `${GITHUB_LOGIN_URI}?${CLIENT_ID}`;

    // const loginUri = 'https://github.com/login/oauth/authorize?client_id=e478d9cea0fa33472386';

    return(
        <>
            <GlobalStyle />
            <Wrapper>
                <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/logo.png" alt="" />
                <Link href={LOGIN_URI}>
                    <button>login with github</button>
                </Link>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/background.png');
    background-size: 100% 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & img{
        width: 240px;
        height: 240px;
    }

    & button{
        margin-top: 60px;
        width: 360px;
        height: 55px;
        color: white;
        background: ${COLOR.black};
        font-size: 20px;
        border-radius: 7px;
    }
`

export default signin;