import styled from "styled-components";
import Header from "../question/header";
import User from "./user/user";
import Level from "./level/level";

const MyPage = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <User />
                <Level />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`

`

export default MyPage;