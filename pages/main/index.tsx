import styled from "styled-components";
import User from "./user/user";
import Roadmap from "./roadmap/roadmap";
import Lecture from "./leccture/lecture";
import Header from "../question/header";
import { useEffect } from "react";

const Main = () => {

    return(
        <>
            <Header />
            <Wrapper>
                <User />
                <div className="roadmap">
                    <Roadmap type={"Frontend Roadmap"} progress={70} />
                    <Roadmap type={"Backend Roadmap"} progress={100} />
                    <Roadmap type={"iOS Roadmap"} progress={70} />
                    <Roadmap type={"Android Roadmap"} progress={100} />
                    <Roadmap type={"AI Roadmap"} progress={70} />
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