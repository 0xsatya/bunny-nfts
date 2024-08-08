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

const CalendarBoxTwo = () => {
  return (
    <CalendarBox>
      <DatesSide>
        <DateText>11/2021</DateText>
        <LineDown />
      </DatesSide>
      <InfoSide>
        <InfoWrap>
          <HeavyInfo>Pre-sale 1</HeavyInfo>
          <InfoList>
            <InfoItem>UTC 6PM @DaBunnyNFT.com</InfoItem>
            <InfoItem>Supply: 1,000 </InfoItem>
          </InfoList>
          <HeavyInfo>$Da Bunny NFT ERC-20 Token on Uniswap</HeavyInfo>
        </InfoWrap>
      </InfoSide>
    </CalendarBox>
  )
}

export default CalendarBoxTwo
