import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props{
    progress: any;
}

const Status = () => {

    const [pro, setPro] = useState<Props>({
        progress: 38,
    });

    useEffect(() => {
        setPro({   
            ...pro, 
            progress: localStorage.getItem("fe")
        })
    }, []);

    return(
        <Container>
            <Wrapper>
                <StatusBar>
                    <div style={{width:  `${(Number(pro.progress) - 1) * 10}%`, height: "25px", }} className="progress"></div>
                </StatusBar>
            </Wrapper>
            <p>{(pro.progress - 1) * 10}%</p>
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-around;

    & p{
        margin: 0;
        font-size: 20px;
        color: #FFA900;
        font-weight: bold;
    }
`

const Wrapper = styled.div`
    width: 90%;
    height: 35px;
    border: 1px solid #949494;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StatusBar = styled.div`
    width: 92%;
    height: 25px;
    background: #D8EEFF;
    border-radius: 20px;

    .progress{
        background: #FF7C6A;
        border-radius: 20px;
    }
`



export default Status;