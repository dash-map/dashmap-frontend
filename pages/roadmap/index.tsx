import { useRouter } from "next/router";
import styled from "styled-components";
import { COLOR } from "../../styles/color";
import Header from "../question/header";

const Roadmap = () => {

    const router = useRouter();

    return(
        <>
            <Header />
            <Wrapper>
                <div onClick={() => {router.push("/question")}} className="top">
                    <button>뒤로가기</button>
                </div>
                <div className="bottom">
                    <img src="https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/frontend_roadmap.png" alt="" />
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    .top{
        & button{
            padding: 5px 40px;
            border-radius: 3px;
            background: none;
            border: 1px solid ${COLOR.main};
            color: ${COLOR.main};
            margin: 30px;
            cursor: pointer;
        }
    }

    .bottom{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
`

export default Roadmap;