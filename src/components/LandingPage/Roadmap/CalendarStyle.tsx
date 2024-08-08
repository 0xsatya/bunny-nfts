import styled from 'styled-components'
import fonts from '../../../styles/typography'

export const CalendarBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: relative;
  @media (max-width: 1100px) {
    display: block;
    margin-top: 6.375rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 96px;
    margin-top: 48px;
  }
`

export const DatesSide = styled.div`
  flex-basis: 10%;
  padding-right: 4.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 1100px) {
    flex-basis: unset;
    padding-right: 0;
    flex-direction: unset;
    align-items: unset;
    padding-top: 0;
    display: block;
    border-left: 7px dashed #fff;
    position: absolute;
    height: calc(100% + 35px);
    left: 0;
    top: 0;
  }

  @media (max-width: 500px) {
    border-left: 4px dashed #fff;
  }
`

export const DateText = styled.p`
  font-weight: 700;
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 1100px) {
    position: relative;
    top: -35px;
    padding-left: 15px;
    color: #fff;
    ::after {
      content: '';
      position: absolute;
      left: -14px;
      top: 14px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    line-height: ${fonts.font40.w500.height};
    ::after {
      left: -10px;
      top: 10px;
      width: 14px;
      height: 14px;
    }
  }
`

export const LineDown = styled.div`
  border-right: 7px dashed #000000;
  flex: 1;
  margin-top: 1.5rem;
  @media (max-width: 1100px) {
    display: none;
  }
`

export const InfoSide = styled.div`
  flex-basis: 79%;
  margin-top: 4.375rem;
  margin-bottom: 4.0625rem;
  @media (max-width: 1100px) {
    flex-basis: 100%;
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    margin-left: 24px;
    position: relative;
    top: -1rem;
  }
`

export const InfoWrap = styled.div`
  background: #ffb9b9;
  border: 3px solid #000000;
  box-shadow: 0 8px 00 #000000;
  border-radius: 10px;
  padding: 30px 2.8125rem;
  @media (max-width: 1100px) {
    position: relative;
    top: 30px;
  }
`

export const HeavyInfo = styled.h3`
  font-weight: bold;
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  @media (max-width: 1660px) {
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
  &&:not(:first-of-type) {
    margin-top: 40px;
    @media (max-width: 500px) {
      margin-top: 16px;
    }
  }
`

export const LightInfo = styled.p`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};

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
    word-break: break-all;
  }
`

export const InfoList = styled.ul`
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
  @media (max-width: 500px) {
    padding: 0 16px;
  }
`

export const InfoItem = styled.li`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  word-break: break-all;
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
    word-break: break-all;
  }
`
