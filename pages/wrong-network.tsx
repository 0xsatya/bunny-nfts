// import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

// export default function wrongNetworkPage({
//   pageComponentProps,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>{pageComponentProps}</h2>
//     </div>
//   )
// }

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   return {
//     props: {
//       pageComponentProps: 'Hello World > Wrong Network Page',
//     },
//   }
// }
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../src/styles/typography';
import CarrotHeader from '../src/components/Shared/CarrotHeader/CarrotHeader';

const Section = styled.section`
  background-color: #5DF2BC;
  position: relative;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerWrap = styled.div`
  padding-top: 10rem;
  padding-bottom: 20.9375rem;
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 970px) {
    padding-bottom: 0;
    padding-top: 10rem;
  }
  @media (max-width: 500px) {
    padding-top: 5rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 80px;
  font-weight: 600;
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  padding-left: 12.5%;
  padding-right: 35%;
  z-index: 1;
  position: relative;
  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }
  @media (max-width: 1250px) {
    padding-left: 7.5%;
    padding-right: 37.5%;
  }
  @media (max-width: 970px) {
    display: none;
  }
`;

const BunnyImage = styled.div`
  position: absolute;
  z-index: 1;
  right: -100px;
  bottom: -.525rem;
  max-width: 622px;
  @media (max-width: 1440px) {
    right: 0;
  }
  @media (max-width: 970px) {
    position: relative;
    left: 65%;
    transform: translateX(-50%);
    padding-top: 35px;
  }

  @media (max-width: 450px) {
    margin-top: 30px;
    left: 50%;
    padding: 0 1rem;
  }

`;

const WrongBunnyImage = styled.div`
  margin: 0 auto;
  max-width: 622px;
  display: flex;
align-items: center;
justify-content: center;
margin-top: -280px;
  @media (max-width: 1440px) {
    right: 0;
  }
  @media (max-width: 970px) {
    position: relative;
    left: 65%;
    transform: translateX(-50%);
    padding-top: 35px;
  }

  @media (max-width: 450px) {
    margin-top: 30px;
    left: 50%;
    padding: 0 1rem;
  }
  div{
    width: 605px;
    height: 605px;
  }
`;
const WrongNetwork = styled.div`

width: 1080px;
margin: 0 auto;
position: relative;
z-index: 1;
  h1{
    font-family: Klose-SemiExpanded;
    font-style: normal;
    font-weight: bolder;
    font-size: 100px;
    line-height: 96.84%;
    /* or 97px */
    
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
-webkit-text-stroke: 3px #000;
  }
  div{
    width: 263px;
  height: 16px;
  border-bottom: 4px solid #000;
  transform: matrix(-1,0,1,1,-18,0);
  border-left: 6px solid #000;
  border-right: 0px;
  border-top: 0px;
  margin-top: 50px;
  border-radius: 0px;
  position: absolute;
  right: 4%;
  top: 61%;
  }
  a{
    font-weight: 600;
font-size: 20px;
line-height: 26px;
/* identical to box height */

display: flex;
align-items: center;

color: #000;
position: absolute;
    right: 5%;
    top: 86%;
  }
`;
const BubblesImage = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  bottom: -10px;
  width: 100%;
  img {
    width: 100vw;
    height: auto;
    max-height: 35rem;
  }
`;
const LinkDiscord = styled.div`
    div{
      width: 263px;
    height: 16px;
    border-bottom: 4px solid #000;
    transform: matrix(-1,0,1,1,-18,0);
    border-left: 6px solid #000;
    border-right: 0px;
    border-top: 0px;
    margin-top: 50px;
    border-radius: 0px;
    }
    a{
      font-weight: 600;
font-size: 20px;
line-height: 26px;
/* identical to box height */

display: flex;
align-items: center;

color: #000;
    }
`;

const LogoImage = styled.div`
    padding: 50px 200px
`;
const WhatDa = () => {

  const [resizeFactor, setResizeFactor] = useState(1);

  const resizeEventHandle = () => {
    const windowWidth = window.innerWidth;
    switch (true) {
      case windowWidth > 1660:
        setResizeFactor(1.25);
        break;
      case windowWidth > 1200:
        setResizeFactor(1.45);
        break;
      default:
        setResizeFactor(1.55);
        break;
    }
  };

  useEffect(() => {
    resizeEventHandle();
    window.addEventListener('resize', resizeEventHandle);
    return () => {
      window.removeEventListener('resize', resizeEventHandle);
    };
  }, []);

  return (
    <Section>
     
    <LogoImage>
    <Image
            width={216 / resizeFactor}
            height={91 / resizeFactor}
            src="/img/icon-main.png"
            alt=""
          />
    </LogoImage>
      <WrongNetwork>
        <h1>Wrong Network, Please connect to mainnet to proceed </h1>
        <div></div>
        <a href="https://www.dabunnynft.com/">Back to DaBunnyNFT.com</a>
      </WrongNetwork>
       <WrongBunnyImage>
          <Image
            width={622 / resizeFactor}
            height={622 / resizeFactor}
            src="/img/wrongbunny.png"
            alt=""
          />
        </WrongBunnyImage>
      <InnerWrap id="about">
        <HeaderWrapper>
          <CarrotHeader bgColor="#87EEF4" padding="1.5625rem 64px 25px 96px">
            What Da Bunny?
          </CarrotHeader>
        </HeaderWrapper>
        <Paragraph>
          Da Bunny is a tribe of 8,000 programmatically generated NFT bunnies that reside in the Ethereum blockchain.
          Generation 1 was incubated from a randomized combination of more than 200 unique traits, out of 4,320,000 total
          possibilities. Each bunny has a unique character and appearance which makes him/her “Da” Bunny....
        </Paragraph>
        <BunnyImage>
          <Image
            width={622 / resizeFactor}
            height={622 / resizeFactor}
            src="/img/bunny2.png"
            alt=""
          />
        </BunnyImage>
      </InnerWrap>
      <BubblesImage>
        <Image
          width={1440}
          height={611}
          src="/img/bubbles_blue.png"
          alt=""
        />
      </BubblesImage>
    </Section>
  )
}

export default WhatDa;
