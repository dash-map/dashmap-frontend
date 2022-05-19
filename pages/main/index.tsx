import styled from "styled-components";
import User from "./user/user";
import Roadmap from "./roadmap/roadmap";
import Lecture from "./leccture/lecture";
import Header from "../question/header";
import { useEffect, useState } from "react";

interface Props {
    fe: number | any;
    be: number | any;
    ios: number | any;
    aos: number | any;
    ai: number | any;
}

const Main = () => {

    const [state, setState] = useState<Props>({
        fe: 0,
        be: 0,
        ios: 0,
        aos: 0,
        ai: 0
    });

    const {fe, be, ios, aos, ai} = state;

    useEffect(() => {
        setState({
            fe: localStorage.getItem("fe"),
            be: localStorage.getItem("be"),
            ios: localStorage.getItem("ios"),
            aos: localStorage.getItem("aos"),
            ai: localStorage.getItem("ai"),
        })
    }, [])

    return(
        <>
            <Header />
            <Wrapper>
                <User />
                <div className="roadmap">
                    <Roadmap type={"Frontend Roadmap"} progress={fe * 10} />
                    <Roadmap type={"Backend Roadmap"} progress={be * 10} />
                    <Roadmap type={"iOS Roadmap"} progress={ios * 10} />
                    <Roadmap type={"Android Roadmap"} progress={aos * 10} />
                    <Roadmap type={"AI Roadmap"} progress={ai * 10} />
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