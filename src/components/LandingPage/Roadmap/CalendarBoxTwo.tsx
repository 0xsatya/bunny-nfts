import React from 'react'

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
} from './CalendarStyle'

const CalendarBoxTwo = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>Late-Jan. 2022</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Whitelist Sale</HeavyInfo>
          <InfoList>
            <InfoItem>UTC 12AM on DaBunnyNFT.com</InfoItem>
            <InfoItem>Details to be announced on Discord</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxTwo
