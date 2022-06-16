import { useEffect, useState } from "react";
import styled from "styled-components";
import { requestWithAccessToken } from "../../../utils/axios/axios";
import axios from "axios";

interface Props {
    rec_1: any;
    rec_2: any;
    rec_3: any;
    rec_4: any;
    rec_5: any;
    rec_6: any;
}

const Lecture = () => {

    const [state, setState] = useState<Props>({
        rec_1: [],
        rec_2: [],
        rec_3: [],
        rec_4: [],
        rec_5: [],
        rec_6: [],
    });

    const URL = 'https://dashmap.kro.kr';

    const [watched, setWatched] = useState({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
        sixth: 0,
    });

    useEffect(() => {
        axios.get(`${URL}/recommend/${localStorage.getItem("userId")}`).then((res) => {
            setState({
                rec_1: res.data.recommend_1,
                rec_2: res.data.recommend_2,
                rec_3: res.data.recommend_3,
                rec_4: res.data.recommend_4,
                rec_5: res.data.recommend_5,
                rec_6: res.data.recommend_6,
            });
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state]);

    const watch = (e: any, index: any) => {
        if(index == 0){
            axios.post(`${URL}/recommend/${localStorage.getItem("userId")}/${e}?ratings=${5}`).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }else{
            return false;
        }
    }


    return(
        <Wrapper>
            {
                state.rec_1[1] &&
                <>
                        <div onClick={() => {setWatched({...watched, first: 1});watch(state.rec_1[0].id, watched.first)}}>
                            <iframe width="560px" height="315px" src={state.rec_1[1].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <iframe width="560" height="315" src={state.rec_2[1].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src={state.rec_3[1].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src={state.rec_4[1].url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src={state.rec_5[1].url} allowFullScreen></iframe>
                        <iframe width="560" height="315" src={state.rec_6[1].url} allowFullScreen></iframe>
                </> 
            }
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid: '. .';
    justify-items: center;

    & iframe{
        margin-top: 30px;
    }
`

export default Lecture;