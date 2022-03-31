import type { NextPage } from 'next'
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      
    </Wrapper>    
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://dash-map.s3.ap-northeast-2.amazonaws.com/frontend/background.png');
  background-size: 100% 100vh;
`

export default Home;