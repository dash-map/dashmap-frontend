import styled from "styled-components";
import { COLOR } from "../../../styles/color";

interface  Props{
    type: string;
}

const Roadmap = ({type}: Props) => {
    return(
        <Wrapper>
            <div className="box">
                {type}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    margin: 20px;
    .box{
        width: 300px;
        height: 190px;
        border: 1px solid #D0D0D0;
        box-shadow: 3px 10px 10px #A9A9A9;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: ${COLOR.second};
    }
`

export default Roadmap;