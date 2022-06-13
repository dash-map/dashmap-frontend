import styled from "styled-components";
import User from "./user/user";
import Roadmap from "./roadmap/roadmap";
import Lecture from "./leccture/lecture";
import Header from "../question/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { requestWithAccessToken } from "../../utils/axios/axios";

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

    const URL = 'https://dashmap.kro.kr'



    useEffect(() => {
        axios.get(`${URL}/recommend/${localStorage.getItem("userId")}`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
        requestWithAccessToken({
            method: "GET",
            url: `/user/${localStorage.getItem("userId")}`,
            headers: {},
            data: {}
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem("fe", res.data.progress.feCount + 1);
            localStorage.setItem("be", res.data.progress.beCount + 1);
            localStorage.setItem("ios", res.data.progress.iosCount + 1);
            localStorage.setItem("aos", res.data.progress.aosCount + 1);
            localStorage.setItem("ai", res.data.progress.aiCount + 1);
            setState({
                fe: res.data.progress.feCount,
                be: res.data.progress.beCount,
                ios: res.data.progress.iosCount,
                aos: res.data.progress.aosCount,
                ai: res.data.progress.aiCount,
            })
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
                    <Roadmap type={"Frontend Roadmap"} progress={fe == 1 ? 0 : fe * 10} />
                    <Roadmap type={"Backend Roadmap"} progress={be == 1 ? 0 : be * 10} />
                    <Roadmap type={"iOS Roadmap"} progress={ios == 1 ? 0 : ios * 10} />
                    <Roadmap type={"Android Roadmap"} progress={aos == 1 ? 0 : aos * 10} />
                    <Roadmap type={"AI Roadmap"} progress={ai == 1 ? 0 : ai * 10} />
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