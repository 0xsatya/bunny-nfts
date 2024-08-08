import React from 'react'

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
} from '../../../src/styles/CalendarStyle'

const CalendarBoxOne = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>10/11/2021</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Website Official Launch</HeavyInfo>
          <HeavyInfo>Discord Community Official Launch</HeavyInfo>
          <LightInfo>Discord: https://discord.gg/p3UQjhQ3</LightInfo>
          <InfoList>
            <InfoItem>@UTC 6PM</InfoItem>
            <InfoItem>Telegram: https://t.me/DaBunnyNFT</InfoItem>
            <InfoItem>Contract Address: TBD</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxOne
