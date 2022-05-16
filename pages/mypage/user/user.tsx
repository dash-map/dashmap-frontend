import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../../styles/color";
import { requestWithAccessToken } from "../../../utils/axios/axios";
import FieldBox from "../filedBox/fieldBox";
import Progress from "../progress/progress";

interface Props {
    email: string;
    name: string;
    image: string;
    crown: {
        fe: boolean;
        be: boolean;
        ios: boolean;
        aos: boolean;
        ai: boolean;
    };
    progress: {
        fe: number;
        be: number;
        ios: number;
        aos: number;
        ai: number;
    }
}

const User = () => {

    const [state, setState] = useState<Props>({
        email: "foaway@gmail.com",
        name: "fuck u",
        image: "",
        crown: {
            fe: false,
            be: false,
            ios: false,
            aos: false,
            ai: false,
        },
        progress: {
            fe: 0,
            be: 0,
            ios: 0,
            aos: 0,
            ai: 0
        }
    });

    const {email, name, image, crown, progress} = state;

    useEffect(() => {
        requestWithAccessToken({
            method: "GET",
            url: `/user/${localStorage.getItem("userId")}`,
            headers: {},
            data: {}
        }).then((res) => {
            console.log(res);
            setState({
                email: res.data.email,
                name: res.data.name,
                image: res.data.profileImageUrl,
                crown: {
                    fe: res.data.crown.isFeClear,
                    be: res.data.crown.isBeClear,
                    ios: res.data.crown.isIosClear,
                    aos: res.data.crown.isAosClear,
                    ai: res.data.crown.isAiClear,
                },
                progress: {
                    fe: res.data.progress.feCount,
                    be: res.data.progress.beCount,
                    ios: res.data.progress.iosCount,
                    aos: res.data.progress.aosCount,
                    ai: res.data.progress.aiCount,
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    },[]);


    return(
        <Container>
            <Wrapper>
                <div className="profileImg">
                    {
                        image == "" ? 
                        <img style={{width: "170px"}} src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/laptop.png" alt="" />
                        :
                        <img src={image} alt="" />
                    }
                </div>
                <div className="info">
                    <div className="top">
                        <p style={{marginBottom: "5px"}}>NAME: &nbsp;&nbsp;<span>{name}</span></p>
                        <p style={{color: `${COLOR.second}`, marginTop: "5px"}}>EMAIL: &nbsp;&nbsp;<span>{email}</span></p>
                    </div>
                    <div className="bottom">
                        <FieldBox field={"FE"} done={crown.fe} />
                        <FieldBox field={"BE"} done={crown.be} />
                        <FieldBox field={"AOS"} done={crown.aos} />
                        <FieldBox field={"iOS"} done={crown.ios} />
                        <FieldBox field={"AI"} done={crown.ai} />
                    </div>
                </div>
            </Wrapper>
            <div className="progress">
                <div className="topProgress">
                    <Progress title={"Frontend roadmap"} pro={progress.fe} />
                    <Progress title={"Backend roadmap"} pro={progress.be} />
                    <Progress title={"Android roadmap"} pro={progress.aos} />
                </div>
                <div className="bottomProgress">
                    <Progress title={"iOS roadmap"} pro={progress.ios} />
                    <Progress title={"AI roadmap"} pro={progress.ai} />
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
            width: 250px;
            border-radius: 50%;
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