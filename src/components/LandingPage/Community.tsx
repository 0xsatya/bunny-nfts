import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import fonts from '../../styles/typography';

const Section = styled.section`
  background-color: #5df2bc;
  position: relative;
  padding: 20px 0 0 0;

  @media (max-width: 950px) {
    padding-bottom: 100px;
  }

  @media (max-width: 500px) {
    padding-bottom: 130px;
  }
`;

const InnerWrap = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 3rem;
  @media (max-width:1150px) {
    padding: 0 20px;
  }
`;

const TitleTop = styled.h2`
  font-weight: 700;
  font-size: calc(${fonts.font40.w1920.fontSize} * 1.35);
  color: #BE6DFF;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 1660px) {
    font-size: calc(${fonts.font40.w1660.fontSize} * 1.35);
  }
  @media (max-width: 1440px) {
    font-size: calc(${fonts.font40.w1440.fontSize} * 1.35);
  }
  @media (max-width: 768px) {
    font-size: calc(${fonts.font40.w768.fontSize} * 1.35);

  }
  @media (max-width: 500px) {
    font-size: calc(${fonts.font40.w500.fontSize} * 1.35);
    margin-top: 12px;
  }

`;

const Title = styled(TitleTop)`
  font-size: ${fonts.font40.w1920.fontSize};
  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    margin-top: 12px;
  }
`;

const Position = styled.p`
  font-weight: 600;
  font-size: ${fonts.font24.w1920.fontSize};
  text-align: center;
  margin-top: .3125rem;
  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1110px;
  max-width: 1110px;
  margin: 3.75rem auto 0 auto;
  @media (max-width:1150px) {
    flex-wrap: wrap;
    min-width: unset;
    max-width: 600px;
  }
  @media (max-width: 500px) {
    margin:  24px auto 0 auto;
  }
`;

const ImageBox = styled.div`
  width: 15.9375rem;
  height: 15.9375rem;
  @media (max-width:1150px) {
    width: unset;
    height: unset;
  }
`;

const BunnyBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1150px) {
    width: calc(50% - .5rem);
    &&:nth-of-type(3), &&:nth-of-type(4) {
      margin-top: 32px;
    }
    &&:nth-of-type(1), &&:nth-of-type(3) {
      margin-right: .5rem;
    }
    &&:nth-of-type(2), &&:nth-of-type(4) {
      margin-left: .5rem;
    }
  }
`;

const BubblesImage = styled.div`
  position: relative;
  z-index: 0;
  bottom: 180px;
  margin-bottom: -190px;
  width: 100%;

  @media (max-width: 950px) {
    bottom: 80px;
  }
  @media (max-width: 500px) {
    bottom: 50px;
  }
  img {
    width: 100vw;
    height: auto;
  }
`;

type BunnyType = {
  image: string;
  title: string;
  position: string;
}

const Bunny = ({ image, title, position }: BunnyType) => {
  return (
    <BunnyBox>
      <ImageBox>
        <Image
          width={255}
          height={255}
          src={`/img/${image}`}
          alt=""
        />
      </ImageBox>
      <Title>{title}</Title>
      <Position>{position}</Position>
    </BunnyBox>
  )
}

const Community = () => {
  return (
    <Section>
      <InnerWrap>
        <TitleTop>Da Bunny Community Organizers</TitleTop>
        <ImageWrap>
          <Bunny image="Christy.png" title="Da Christy" position="Concept Artist" />
          <Bunny image="David.png" title="Da David" position="Tech & Product" />
          <Bunny image="Canny.png" title="Da Canny" position="Biz & Ops" />
          <Bunny image="Oscar_blue.png" title="Da Oscar" position="Marketing" />
        </ImageWrap>
      </InnerWrap>
      <BubblesImage>
        <Image
          width={1440}
          height={504}
          src="/img/bubbles_red.png"
          alt=""
        />
      </BubblesImage>
    </Section >
  )
}

export default Community;