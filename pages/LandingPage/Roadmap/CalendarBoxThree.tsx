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
} from '../../../src/styles/CalendarStyle'

const CalendarBoxThree = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>11/2021</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Pre-sale 2</HeavyInfo>
          <InfoList>
            <InfoItem>UTC 6PM @DaBunnyNFT.com</InfoItem>
            <InfoItem>Supply: 2,000</InfoItem>
          </InfoList>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxThree
