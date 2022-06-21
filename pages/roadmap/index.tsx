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
                    뒤로가기
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    .top{
        padding: 5px 20px;
        border-radius: 3px;
        background: none;
        border: 1px solid ${COLOR.main};
        color: ${COLOR.main};
    }
`

export default Roadmap;