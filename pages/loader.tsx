import styled from "styled-components"

const Loader = () => {
    return(
        <Wrapper>
             <div className="loader">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className="loader loader--reflect">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* animation code */

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 200px;
    height: 100px;

    margin-top: -100px;
    margin-left: -100px;

    perspective: 1000px;
    transform-style: preserv3d;
  }

  .loader--reflect {
    margin-top: 0;
  }

  .loader--reflect:after {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    width: 150%;
    height: 110%;
    background: linear-gradient(
      0deg,
      rgba(238, 238, 238, 1),
      rgba(238, 238, 238, 1) 20%,
      rgba(238, 238, 238, 0.3)
    );
  }

  .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 100px;
    background-color: #FFA900;
    transform: scaleY(0);
    transform-style: preserve3d;
    animation: bar 3s cubic-bezier(0.81, 0.04, 0.4, 0.7) infinite;
  }

  .bar:nth-child(2) {
    left: 20px;
    background-color: #FFB117;
    animation-delay: 50ms;
  }

  .bar:nth-child(3) {
    left: 40px;
    background-color: #FFB92F;
    animation-delay: 100ms;
  }

  .bar:nth-child(4) {
    left: 60px;
    background-color: #FFC657;
    animation-delay: 150ms;
  }

  .bar:nth-child(5) {
    left: 80px;
    background-color: #FFD27B;
    animation-delay: 200ms;
  }

  .bar:nth-child(6) {
    left: 100px;
    background-color: #FFDA92;
    animation-delay: 250ms;
  }

  .bar:nth-child(7) {
    left: 120px;
    background-color: #FFE6B6;
    animation-delay: 300ms;
  }

  .bar:nth-child(8) {
    left: 140px;
    background-color: #FEEBC6;
    animation-delay: 350ms;
  }

  .bar:nth-child(9) {
    left: 160px;
    background-color: #FFEFCF;
    animation-delay: 400ms;
  }

  .bar:nth-child(10) {
    left: 180px;
    background-color: #FFF3DB;
    animation-delay: 450ms;
  }

  .loader--reflect .bar {
    animation-name: bar-reflect;
  }

  @keyframes bar {
    0% {
      transform: rotateZ(-180deg) rotateX(-360deg);
    }
    75%,
    100% {
      transform: rotateZ(0) rotateX(0);
    }
  }

  @keyframes bar-reflect {
    0% {
      transform: rotateZ(180deg) rotateX(360deg);
    }
    75%,
    100% {
      transform: rotateZ(0) rotateX(0);
    }
  }
`

export default Loader; 