import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { CONNECT_STATUS, SALE_STATUS } from '../../../../utils/Interface';
import fonts from '../../../../styles/typography';

const CtaButton = styled.div`
  width: 28.4375rem;
  height: 7.5rem;
  position: relative;
  top: -14.75rem;
  display: block;
  margin: 0 auto;

  @media (max-width: 1660px) {
    width: 22rem;
    height: 6rem;
    top: 2rem;
  }

  @media (max-width: 1150px) {
    top: 5rem;
  }

  @media (max-width: 768px) {
    width: 14.5rem;
    height: 3.875rem;
  }
`;

const FirstLayer = styled.div`
  background: #FFDC25;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 3px solid #000000;
`;

const SecondLayer = styled.div`
  background: #4A7A72;
  position: absolute;
  z-index: 1;
  top: -.9375rem;
  left: .9375rem;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 3px solid #000000;
  @media (max-width: 768px) {
    top: -0.3375rem;
    left: 0.3375rem;
  }
`;

const ButtonText = styled.p`
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1600px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
      font-size: ${fonts.font40.w500.fontSize};
      line-height: ${fonts.font40.w500.height};
  }
`;

const ButtonTextClick = styled(ButtonText)`
  cursor: pointer;
`;

const LeftCornerSVG = () => {
  return (
    <svg width="50" height="36" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 31.3472V19.0957C5 11.3637 11.268 5.0957 19 5.0957H45" stroke="white" strokeWidth="9" strokeLinecap="round" />
    </svg>
  )
}

const RightCornerSVG = () => {
  return (
    <svg width="92" height="25" viewBox="0 0 92 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5 5.23649L87.5 5.59267C87.5 13.3247 81.232 19.5927 73.5 19.5927L4.5 19.5928" stroke="white" strokeWidth="9" strokeLinecap="round" />
    </svg>

  )
}

const LeftCorner = styled.div`
  position: absolute;
  z-index: 3;
  left: 10px;
  top: 10px;
  @media (max-width: 768px) {
    left: .525rem;
    top: .325rem;
  }
  svg {
    width: 40px;
    height: 1.6875rem;
    @media (max-width: 768px) {
      height: 13.5px;
      width: 20px;
    }
  }
`;

const RightCorner = styled.div`
  position: absolute;
  z-index: 3;
  right: .3125rem;
  bottom: 10px;
  @media (max-width: 768px) {
    bottom: .125rem;
  }
  svg {
    width: 5.1875rem;
    height: 0.9375rem;
    @media (max-width: 768px) {
        width: 42px;
        height: 7.5px;
    }
  }
`;
interface ConnectButton {
  connectStatus: string,
  saleStatus: string
  text?: string,
  setShowMintBox: (show: boolean) => void
  onConnectWallet:()=> void;
}

const ConnectButton = (props: ConnectButton) => {
  const { connectStatus, saleStatus, setShowMintBox, onConnectWallet } = props;
  // console.log(connectStatus, saleStatus);
  return (
    <CtaButton>
      <LeftCorner>
        <LeftCornerSVG />
      </LeftCorner>
      <FirstLayer />
      <SecondLayer />
      {saleStatus === SALE_STATUS.OFFSALE && <ButtonText>
        {/* <Countdown date='2021-11-08T00:00:00' /> */}
        TBA
      </ButtonText>}
      {saleStatus === SALE_STATUS.ONSALE && connectStatus === CONNECT_STATUS.CONNECT && <ButtonTextClick onClick={onConnectWallet}>
        Connect
      </ButtonTextClick>}
      {saleStatus === SALE_STATUS.ONSALE && connectStatus === CONNECT_STATUS.CONNECTED && <ButtonTextClick onClick={()=> setShowMintBox(true)}>
        Mint
      </ButtonTextClick>}
      <RightCorner>
        <RightCornerSVG />
      </RightCorner>
    </CtaButton>
  )
}

export default ConnectButton;
