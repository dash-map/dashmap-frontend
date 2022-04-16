import styled from "styled-components";

interface Props{
    field: string;
    done: boolean;
}

const FieldBox = ({field, done}: Props) => {

    return(
        <Wrapper>
            {
                !done ? 
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/crown.png" alt="" />
                    :
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/real_crown.png" alt="" />
            }
            <p>{field}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & p{
        color: #F27A6A;
        text-align: center;
        font-size: 14px;
        margin: 0px;
    }
    & img{
        width: 55px;
    }
`

export default FieldBox;