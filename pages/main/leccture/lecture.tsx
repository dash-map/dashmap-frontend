import { useEffect, useState } from "react";
import styled from "styled-components";
import { requestWithAccessToken } from "../../../utils/axios/axios";
import axios from "axios";

const Lecture = () => {

    const [state, setState] = useState<any>([]);

    const URL = 'https://dashmap.kro.kr';

    useEffect(() => {
        axios.get(`${URL}/recommend/${localStorage.getItem("userId")}`).then((res) => {
            console.log(res);
            setState(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        console.log(state)
    }, [state])


    return(
        <Wrapper>
            <iframe width="560px" height="315px" src="https://www.youtube.com/embed/edWbHp_k_9Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DHPeeEvDbdo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BUTP-YsD3nM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cEUIhLOgWZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IDVnZPjRCYg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9XjpfW8U3P4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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