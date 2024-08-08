import React from "react";
import styled from "styled-components";
import Image from 'next/image';
import fonts from '../../../styles/typography';

type CarrotType = {
  children: any;
  padding: string;
  bgColor: string;
}

const Wrap = styled.div<{ padding: string; bgColor: string; }>`
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.625rem;
  position: relative;
  border: 3px solid #000000;
  border-radius: 10px;
  box-shadow:0 8px 0 0 #000000;

  @media (max-width: 768px) {
    padding: 16px 32px;
    height: unset;
    min-width:  240px;
  }
`;

const CarrotWrap = styled.div`
  display: block;
  position: absolute;
  left: -1.5625rem;
  bottom: -0.9375rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 56px;
    height: 74px;
    bottom: 0rem;
    left: -1rem;
  }
`;

const Paragraph = styled.p`
  display: block;
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  font-weight: 600;
  text-align: center;

  @media (max-width: 1600px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }

  @media (max-width: 1600px) {
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
`;


const CarrotHeader = ({ children, bgColor, padding }: CarrotType) => {
  return (
    <Wrap bgColor={bgColor} padding={padding}>
      <CarrotWrap>
        <Image
          width={124}
          height={163}
          src="/img/carrot.png"
          alt=""
        />
      </CarrotWrap>
      <Paragraph>
        {children}
      </Paragraph>
    </Wrap>
  )
}

export default CarrotHeader;
