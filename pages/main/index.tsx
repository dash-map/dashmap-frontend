import styled from "styled-components";
import User from "./user/user";
import Roadmap from "./roadmap/roadmap";
import Lecture from "./leccture/lecture";
import Header from "../question/header";
import { useEffect } from "react";
import axios from "axios";

const Main = () => {

    useEffect(() => {
        axios.post(`http://github.com/login/oauth/access_token?client_id=e478d9cea0fa33472386&client_secret=ffe57e25261340b2982cfb3ba16b07198f7df105&code=${localStorage.getItem("code")}`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

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