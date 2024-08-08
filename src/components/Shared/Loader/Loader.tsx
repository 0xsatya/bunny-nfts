import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

export const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #FFD74C;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  .demo-preview {
    padding-top: 100px;
    padding-bottom: 10px;
    margin: auto;
    width: 50%;
    text-align: center;
  }
  
  .progress {
    
border: 10px solid #000000;
box-sizing: border-box;
border-radius: 94px;
background: #FC6612;
width: 650px;
height: 90px;
  }
  .progress.progress-xs {
    height: 5px;
    margin-top: 5px;
  }
  .progress.progress-sm {
    height: 10px;
    margin-top: 5px;
  }
  .progress.progress-lg {
    height: 25px;
  }
  .progress.vertical {
    position: relative;
    width: 20px;
    height: 200px;
    display: inline-block;
    margin-right: 10px;
  }
  .progress.vertical > .progress-bar {
    width: 100% !important;
    position: absolute;
    bottom: 0;
  }
  .progress.vertical.progress-xs {
    width: 5px;
    margin-top: 5px;
  }
  .progress.vertical.progress-sm {
    width: 10px;
    margin-top: 5px;
  }
  .progress.vertical.progress-lg {
    width: 30px;
  }
  
  .progress-bar {
    background-color: #2196F3;
    box-shadow: none;
  }
  .progress-bar.text-left {
    text-align: left;
  }
  .progress-bar.text-left span {
    margin-left: 10px;
  }
  .progress-bar.text-right {
    text-align: right;
  }
  .progress-bar.text-right span {
    margin-right: 10px;
  }
  
  @-webkit-keyframes progress-bar-stripes {
    from {
      background-position: 40px 0;
    }
    to {
      background-position: 0 0;
    }
  }
  @keyframes progress-bar-stripes {
    from {
      background-position: 40px 0;
    }
    to {
      background-position: 0 0;
    }
  }
  .progress.active .progress-bar,
  .progress-bar.active {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
  }
  
  .progress-striped .progress-bar,
  .progress-bar-striped {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 40px 40px;
  }
  
  .progress-bar-secondary {
    background-color: #323a45;
  }
  
  .progress-bar-default {
    background-color: #B0BEC5;
  }
  
  .progress-bar-success {
    background-color: #64DD17;
  }
  
  .progress-bar-info {
    background-color: #29B6F6;
  }
  
  .progress-bar-warning {
    background-color: #FFD600;
  }
  
  .progress-bar-danger {
    background-color: #ef1c1c;
  }
`;
const LoaderImage = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    image{
      width: 650px;
    height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-animation: shake 0.3s linear 0s infinite;
      -moz-animation: shake 0.3s linear 0s infinite;
      -ms-animation: shake 0.3s linear 0s infinite;
      -o-animation: shake 0.3s linear 0s infinite;
      animation: shake 0.3s linear 0s infinite;
    }
    @-webkit-keyframes shake {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      25% {
        transform: rotate(10deg) translate3d(0, 0, 0);
      }
      50% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      75% {
        transform: rotate(-10deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
    @-moz-keyframes shake {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      25% {
        transform: rotate(10deg) translate3d(0, 0, 0);
      }
      50% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      75% {
        transform: rotate(-10deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
    @-ms-keyframes shake {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      25% {
        transform: rotate(10deg) translate3d(0, 0, 0);
      }
      50% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      75% {
        transform: rotate(-10deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
    @-o-keyframes shake {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      25% {
        transform: rotate(10deg) translate3d(0, 0, 0);
      }
      50% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      75% {
        transform: rotate(-10deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
    @keyframes shake {
      0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      25% {
        transform: rotate(10deg) translate3d(0, 0, 0);
      }
      50% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
      75% {
        transform: rotate(-10deg) translate3d(0, 0, 0);
      }
      100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
      }
    }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1b5299;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
const Loader = () => {
  return (
    <Screen>
      <Balls>
        {/* <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div> */}
        
        {/* <div className="demo-preview">
        <div className="progress progress-striped active">
      <div role="progressbar progress-striped"  className="progress-bar"><span></span></div>
    </div>
        </div> */}
       
      </Balls>
      <LoaderImage>
      <Image
            width={450 }
            height={150 }
            src="/img/Loader.PNG"
            alt=""
            className='shake'
          />
      </LoaderImage>
    </Screen>
  )
}

export default Loader
