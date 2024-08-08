import React from 'react';

import {
  CalendarBox,
  DatesSide,
  DateText,
  LineDown,
  InfoSide,
  InfoWrap,
  HeavyInfo,
  InfoList,
  InfoItem,
} from './CalendarStyle';

const CalendarBoxThree = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>Late-Jan. 2022</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
        <HeavyInfo>$Da Bunny NFT ERC-20 Token on Uniswap</HeavyInfo>
          <InfoList>
            <InfoItem>Join verified channel for launch details</InfoItem>
            <InfoItem>Telegram: https://t.me/dabunnyofficial</InfoItem>
            <InfoItem>Contract Address: TBD</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxThree;
