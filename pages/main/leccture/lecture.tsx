import { useEffect, useState } from "react";
import styled from "styled-components";
import { requestWithAccessToken } from "../../../utils/axios/axios";

interface Props {
    rec_1: string;
    rec_2: string;
    rec_3: string;
    rec_4: string;
    rec_5: string;
    rec_6: string;
}

const Lecture = () => {

    const [state, setState] = useState<Props>({
        rec_1: "https://www.youtube.com/embed/edWbHp_k_9Y",
        rec_2: "https://www.youtube.com/embed/DHPeeEvDbdo",
        rec_3: "https://www.youtube.com/embed/BUTP-YsD3nM",
        rec_4: "ttps://www.youtube.com/embed/cEUIhLOgWZI",
        rec_5: "https://www.youtube.com/embed/9XjpfW8U3P4",
        rec_6: "https://www.youtube.com/embed/IDVnZPjRCYg",
    });

    useEffect(() => {
        requestWithAccessToken({
            url: "/recommend",
            method: "GET",
            headers: {},
            data: {}
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

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