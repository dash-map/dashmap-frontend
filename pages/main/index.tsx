import styled from "styled-components";
import User from "./user/user";
import Roadmap from "./roadmap/roadmap";
import Lecture from "./leccture/lecture";
import Header from "../question/header";

const Main = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <User />
                <div className="roadmap">
                    <Roadmap type={"Frontend Roadmap"} />
                    <Roadmap type={"Backend Roadmap"} />
                    <Roadmap type={"iOS Roadmap"} />
                    <Roadmap type={"Android Roadmap"} />
                    <Roadmap type={"AI Roadmap"} />
                </div>
                <Lecture />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    .roadmap{
        display: flex;
        width: 100%;
        overflow-x: scroll;
    }
`

export default Main;