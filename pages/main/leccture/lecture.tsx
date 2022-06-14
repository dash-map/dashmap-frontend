import { useEffect, useState } from "react";
import styled from "styled-components";
import { requestWithAccessToken } from "../../../utils/axios/axios";
import axios from "axios";

interface Props {
    rec_1: [];
    rec_2: [];
    rec_3: [];
    rec_4: [];
    rec_5: [];
    rec_6: [];
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
            console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        console.log(state)
        console.log(state.rec_1[1].url)
    }, [state])


    return(
        <Wrapper>
            {
                state &&
                <>
                    <iframe width="560px" height="315px" src={`${state.rec_1[1].url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DHPeeEvDbdo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BUTP-YsD3nM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cEUIhLOgWZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IDVnZPjRCYg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9XjpfW8U3P4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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