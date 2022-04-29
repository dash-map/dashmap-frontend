import { NextPage } from "next";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header: NextPage = () => {

    const [logout, setLogout] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if(logout === true){
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('imageUrl');
            localStorage.removeItem('jwt');
            router.reload()
        }
    }, [logout])

    return(
        <Wrapper>
            <div className="left">
                <Link href={"/main"}>
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/small-logo.png" alt="" />
                </Link>
            </div>
            <div className="right">
                <Link href={"/mypage"}>마이페이지</Link>
                <p onClick={() => {setLogout(true)}}>로그아웃</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left{
        & img{
            width: 25px;
            margin-left: 20px;
            cursor: pointer;
        }
    }

    .right{
        display: flex;
        font-weight: bold;
        align-items: center;
        & a{
            color: ${COLOR.main};
            margin-right: 20px;
        }

        & p{
            color: ${COLOR.second};
            margin-right: 40px;
            cursor: pointer;
        }

        
    }
`

export default Header;