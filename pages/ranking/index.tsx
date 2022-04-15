import styled from "styled-components";
import RankBox from "./rankBox/rankBox";
import Header from "../question/header";

const Rank = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <p>랭킹</p>
                <div className="rank">
                    <RankBox />
                    <RankBox />
                    <RankBox />
                    <RankBox />
                    <RankBox />
                    <RankBox />
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .rank{
        width: 60%;
        display: flex;
        align-items: center;
        flex-direction: column;
        
    }
`

export default Rank;