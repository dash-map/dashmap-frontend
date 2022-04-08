import styled from "styled-components"

const RankBox = () => {
    return(
        <Wrapper>
            <div className="user">
                <div className="back">
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
                </div>
                <div className="right">
                    <p className="name">손윤석</p>
                    <p className="email">thsdbstjr@gmail.com</p>
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 60%;

    p {
        margin: 0;
    }

    .user{
        align-items: center;

        .back{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(#FFD074, #F9A296);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 15px;
        }
        & img{
            width: 50px;
            height: 50px;
        }
        display: flex;

    }
`

export default RankBox;