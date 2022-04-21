import styled from "styled-components";
import Header from "../question/header";
import User from "./user/user";

const MyPage = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <User />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
`

export default MyPage;