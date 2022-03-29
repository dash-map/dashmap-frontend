import type { NextPage } from 'next'
import styled from "styled-components";
import { Back } from '../assets';

const Home: NextPage = () => {
  return (
    <Wrapper></Wrapper>    
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${Back}');
  background-size: contain;
  background-repeat: no-repeat;
`

export default Home
