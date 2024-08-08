import React from 'react';

import {
  CalendarBox,
  DatesSide,
  DateText,
  LineDown,
  InfoSide,
  InfoWrap,
  HeavyInfo,
  LightInfo,
  InfoList,
  InfoItem,
} from './CalendarStyle';

const CalendarBoxOne = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>Mid-Jan. 2022</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Website Official Launch</HeavyInfo>
          <HeavyInfo>Twitter Official Launch</HeavyInfo>
          <LightInfo>https://twitter.com/DaBunnyNFT</LightInfo>
          <HeavyInfo>Discord Community Official Launch</HeavyInfo>
          <LightInfo>https://discord.gg/p3UQjhQ3</LightInfo>

        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxOne;
