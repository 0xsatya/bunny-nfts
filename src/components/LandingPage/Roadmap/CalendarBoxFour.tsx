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

const CalendarBoxFour = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>Feb. 2022</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Official Launch</HeavyInfo>
          <InfoList>
            <InfoItem>UTC 12AM @DaBunnyNFT.com</InfoItem>
            <InfoItem>Details to be announced on Discord</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxFour;
