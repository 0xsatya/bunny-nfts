import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../../styles/typography';

const BackInDays = styled.div`
  width: 100%;
  position: relative;
`;

const ContentImage = styled.div`
  position: relative;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ContentText = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentWrap = styled.div`
  position: relative;
  margin-bottom: -100px;
  @media (max-width: 1250px) {
    margin-bottom: -140px;
  }
  @media (max-width: 1000px) {
    margin-bottom: -110px;
  }
`;

const BackInDaysText = styled.div`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  p {
    max-width: 590px;
    width: 60%;

    @media (max-width: 1440px) {
      padding-left: 30px;
    }
  }

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }

  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }

  @media (max-width: 1250px) {
    padding: 0 0 0 50px;
    position: relative;
    top: -50px;
  }
`;

const ThreeBunnies = styled.div`
  width: 100%;
  position: relative;
`;

const ThreeBunniesText = styled.div`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  display: flex;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  top: -7rem;
  p {
    max-width: 590px;
    width: 60%;

    @media (max-width: 1440px) {
      padding-right: 30px;
    }
  }

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }

  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }

  @media (max-width: 1250px) {
    padding: 0 50px 0 50px;
    position: relative;
    top: -120px;
  }

  @media (max-width: 1150px) {
    top: -80px;
  }

  @media (max-width: 970px) {
    top: -65px;
  }

  @media (max-width: 850px) {
    top: -30px;
  }

  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
    line-height: ${fonts.font24.w768.height};
  }

  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
    line-height: ${fonts.font24.w500.height};
  }
`;

const AntMiner = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const AntMinerText = styled.div`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  top: -12rem;
  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }

  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
    line-height: ${fonts.font24.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
    line-height: ${fonts.font24.w500.height};
  }
  p {
    max-width: 680px;
    width: 60%;
    @media (max-width: 1250px) {
      width: 65%;
    }
  }


`;

const ContentDesktop = () => {
  return (
    <ContentWrap>
      <ContentImage>
        <Image
          width={1114}
          height={1789}
          src={"/img/full-paths.png"}
          alt=""
        />
      </ContentImage>
      <ContentText>
        <BackInDays>
          <BackInDaysText>
            <p>
            The origin of Da Bunny tribe is a one-in-a-billion, singular coincidence on earth over the course of evolution.
            <span className='line-break'></span>
For generations, life couldn&apos;t be more boring for a tribe of Lilac Rabbits inhabited on the Easter Island of Chile...
            </p>
          </BackInDaysText>
        </BackInDays>
        <ThreeBunnies>
          <ThreeBunniesText>
            <p>
              For generations, life couldn&apos;t be more boring for a tribe of Lilac Rabbits inhabited on the Easter Island of Chile.
              These rabbits spent their lifetime at the factory, starved and deprived, mass-producing artificial eggs for a festival
              celebrated in the post-industrialized human society — in a meager exchange for only three carrots a day.
            </p>
          </ThreeBunniesText>
        </ThreeBunnies>
        <AntMiner>
          <AntMinerText>
            <p>
            The life-changing moment arrived one day when a tribe member found an idled Antminer S19 crypto mining machine in the remnants of an abandoned factory havocked by a deadly volcanic erruption.
            <span className='line-break'></span>
It soon occurred to a bunny that he can get “ETH” from the machine.
            </p>
          </AntMinerText>
        </AntMiner>
      </ContentText>
    </ContentWrap>
  )
}

export default ContentDesktop;
