import styled from "styled-components";
import { COLOR } from "../../../styles/color";

interface Props {
    title: string;
    pro: number;
}

const Progress = ({title, pro}: Props) => {
    return(
        <Container>
            <p>{title}</p>
            <Wrapper>
                <p className="percent">{pro}%</p>
                <div className="proBox">
                    <div style={{width: `${pro}%`}} className="prog">

                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & p{
        font-size: 20px;
        color: ${COLOR.black};
        font-weight: bold;
    }
`

const Wrapper = styled.div`

    .percent{
        color: ${COLOR.second};
    }
    width: 220px;
    height: 130px;
    border: 1px solid #e4e4e4;
    box-shadow: 0px 0px 10px #C2C2C2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .proBox{
        width: 80%;
        height: 18px;
        background: #D8EEFF;
        border-radius: 20px;

        .prog{
            background: #FF7C6A;
            height: 18px;
            border-radius: 20px;
        }
    }
`

export default Progress;