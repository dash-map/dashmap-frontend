import styled from "styled-components"

const Lecture = () => {
    return(
        <Wrapper>
            <iframe width="560px" height="315px" src="https://www.youtube.com/embed/edWbHp_k_9Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DHPeeEvDbdo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BUTP-YsD3nM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cEUIhLOgWZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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