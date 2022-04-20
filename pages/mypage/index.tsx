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
                <Level level={20} medal={10} />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    margin-top: 60px;
`

export default MyPage;