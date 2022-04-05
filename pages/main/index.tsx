import { NextPage } from "next";
import styled from "styled-components";
import Header from "./header";
import Order from "./order/order";
import Card from "./card/card";
import Status from "./status/status";

const Main: NextPage = () => {
    return(
        <Wrapper>
            <Header />
            <div className="main">
                <Order />
                <Card />
                <Status />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    .main{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default Main;