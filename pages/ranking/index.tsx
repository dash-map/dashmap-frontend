import styled from "styled-components";
import RankBox from "./rankBox/rankBox";
import Header from "../question/header";

const Rank = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <RankBox />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

`

export default Rank;