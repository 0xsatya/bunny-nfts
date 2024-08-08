import React from 'react'
import {
  CalendarBox,
  DatesSide,
  DateText,
  HeavyInfo,
  InfoItem,
  InfoList,
  InfoSide,
  InfoWrap,
  LineDown,
} from '../../../src/styles/CalendarStyle'

const CalendarBoxFour = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>11/2021</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Official Launch</HeavyInfo>
          <InfoList>
            <InfoItem>UTC 6PM @DaBunnyNFT.com</InfoItem>
            <InfoItem>Supply: 5,000+ (Buy Limit: 20)</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxFour
