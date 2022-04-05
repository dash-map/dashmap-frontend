import { NextPage } from "next";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Link from "next/link";

const Header: NextPage = () => {
    return(
        <Wrapper>
            <div className="left">L</div>
            <div className="right">
                <Link href={"/mypage"}>마이페이지</Link>
                <Link href={""}>로그아웃</Link>
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

    .right{
        display: flex;
        font-weight: bold;
        & a:nth-of-type(1){
            color: ${COLOR.main};
            margin-right: 20px;
        }

        & a:nth-of-type(2){
            color: ${COLOR.second};
            margin-right: 40px;
        }
    }
`

export default Header;