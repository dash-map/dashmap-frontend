import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import FieldBox from "../filedBox/fieldBox";
import Progress from "../progress/progress";

const User = () => {
    return(
        <Container>
            <Wrapper>
                <div className="profileImg">
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
                </div>
                <div className="info">
                    <div className="top">
                        <p>NAME: &nbsp;&nbsp;<span>손윤석</span></p>
                    </div>
                    <div className="bottom">
                        <FieldBox field={"FE"} done={false} />
                        <FieldBox field={"BE"} done={true} />
                        <FieldBox field={"AOS"} done={false} />
                        <FieldBox field={"iOS"} done={true} />
                        <FieldBox field={"AI"} done={false} />
                    </div>
                </div>
            </Wrapper>
            <div className="progress">
                <div className="topProgress">
                    <Progress title={"Frontend roadmap"} pro={70} />
                    <Progress title={"Backend roadmap"} pro={100} />
                    <Progress title={"Android roadmap"} pro={70} />
                </div>
                <div className="bottomProgress">
                    <Progress title={"iOS roadmap"} pro={100} />
                    <Progress title={"AI roadmap"} pro={70} />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .progress{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .topProgress{
            display: flex;
            justify-content: space-between;
        }

        .bottomProgress{
            display: flex;
            justify-content: space-evenly;
            margin-top: 0px;
        }
    }
`

const Wrapper = styled.div`

    display: flex;
    align-items: center;   
    gap: 100px; 
    border-bottom: 1px solid #bbbbbb;
    padding: 20px 70px 20px 70px;
    .profileImg{
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(#FFD074, #F9A296);
        border-radius: 50%;
        & img{
            width: 190px;
        }
    }

    .info{
        & p{
            font-size: 20px;
            color: ${COLOR.main};
            font-weight: bold;
            & span{
                color: black;
                font-size: 16px;
                font-weight: normal;
            }
        }
    }

    .bottom{
        display: flex;
        gap: 10px;
    }
`


export default User;