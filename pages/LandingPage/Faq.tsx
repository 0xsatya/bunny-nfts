import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fonts } from '../../src/styles/typography'
import CarrotHeader from '../../src/components/Shared/CarrotHeader/CarrotHeader'

const Section = styled.section`
  background-color: #39b9ff;
  position: relative;
  padding-top: 9rem;
  padding-bottom: 25rem;
  @media (max-width: 768px) {
    padding-top: 48px;
    padding-bottom: 240px;
  }
`

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
`

const InnerLimit = styled.section`
  max-width: 90rem;
  margin: 0 auto;
`

const Paragraph = styled.p`
  font-size: ${fonts.font24.w1920.fontSize};

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }
`

const QuestionWrap = styled.div`
  margin-top: 6.25rem;
  padding: 3.125rem 80px;
  margin: 0 80px;
  background-color: #bbe7ff;
  border: 3px solid #000000;
  border-radius: 10px;
  box-shadow: 0 8px 0 #000000;

  @media (max-width: 768px) {
    padding: 16px;
    margin: 0 16px;
    box-shadow: 0 3.2px 0 0 #000000;
  }
`

const TextHeader = styled.h3`
  background-color: #ffb9b9;
  border-radius: 8.4375rem;
  height: 4.65rem;
  padding: 1.5rem 40px;
  box-shadow: 16px 16px 0 0 #000000;
  width: max-content;
  font-size: ${fonts.font24.w1920.fontSize};
  margin: 3rem 80px 3rem 80px;

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
    margin: 24px auto 24px auto;
    height: 38px;
    padding: 10px 30px;
    box-shadow: 6.5px 6.5px 0 0 #000000;
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }
`

const TextHeaderFirst = styled(TextHeader)`
  margin: 5rem 80px 3rem 80px;

  @media (max-width: 768px) {
    margin: 32px auto 48px auto;
  }
`

const List = styled.ul`
  padding-left: 40px;
  @media (max-width: 768px) {
    padding-left: 16px;
  }
`

const ListItem = styled.li`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: normal;
  font-size: ${fonts.font24.w1920.fontSize};

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }
`

const BubblesImage = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  bottom: -10px;
  width: 100%;
  img {
    width: 100vw;
    height: auto;
  }
`

const DropDown = styled.div<{ expanded: boolean }>`
  overflow: hidden;
  height: ${({ expanded }) => (expanded ? 600 : 0)}px;
  transition: height 0.5s ease-out;

  @media (max-width: 1000px) {
    height: ${({ expanded }) => (expanded ? 620 : 0)}px;
  }

  @media (max-width: 768px) {
    height: ${({ expanded }) => (expanded ? 200 : 0)}px;
  }

  @media (max-width: 500px) {
    height: ${({ expanded }) => (expanded ? 260 : 0)}px;
  }

  @media (max-width: 320px) {
    height: ${({ expanded }) => (expanded ? 280 : 0)}px;
  }
`

const ClickShow = styled.div<{ expanded: boolean }>`
  position: relative;
  z-index: 2;
  margin: 50px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: #fff;
  font-size: ${fonts.font24.w1920.fontSize};
  font-weight: 700;

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
  }

  svg {
    margin-top: 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    fill: #fff;
    transform: rotate(${({ expanded }) => (expanded ? 540 : 0)}deg);
    transition: transform 0.2s ease-out;

    @media (max-width: 500px) {
      width: 24px;
      height: 24px;
      margin-top: 4px;
    }
  }
`

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
      <path
        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
      />
    </svg>
  )
}

const Faq = () => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleShow = () => {
    setExpanded(!expanded)
  }

  return (
    <Section>
      <InnerLimit id="faq">
        <HeaderWrap>
          <CarrotHeader bgColor="#C6EBFF" padding="1.5625rem 64px 25px 96px">
            Frequently Asked Questions
          </CarrotHeader>
        </HeaderWrap>
        <TextHeaderFirst>How rare is my Bunny?</TextHeaderFirst>
        <QuestionWrap>
          <Paragraph>
            “All bunnies are rare but some are more rare than others.” On the
            scale of 1-100%:
          </Paragraph>
          <List>
            <ListItem>
              4,000 (50%) are freely roaming Wild Bunnies abundant everywhere on
              the Island,
            </ListItem>
            <ListItem>
              2,500 (31%) are Rare Bunnies (RB) found in select habitats,
            </ListItem>
            <ListItem>
              1,000 (13%) are Super Rare Bunnies (SRB) hidden in Da Bunny Rabbit
              Hole,
            </ListItem>
            <ListItem>
              500 (6%) are Super Super Rare Bunnies (SSRB) that travel via
              secret underground pathways only, and
            </ListItem>
            <ListItem>
              50 ({'<'}1%) are Superior Bunnies (SB+) equipped only with
              one-of-a-kind accessories and outfits.
            </ListItem>
          </List>
        </QuestionWrap>
        <TextHeader>What is an NFT?</TextHeader>
        <QuestionWrap>
          <Paragraph>
            NFT stands for “Non-fungible token” and is a fancy way of saying
            it’s a unique, one of a kind digital item that users can buy, own,
            and trade. Some NFTs main function are to be digital art and look
            cool, some offer additional utility like exclusive access to
            websites or participation in an event, think of it like a rare piece
            of art that can also act as a “members” card.
          </Paragraph>
        </QuestionWrap>
        <TextHeader>What is Metamask?</TextHeader>
        <QuestionWrap>
          <Paragraph>
            Metamask is a crypto wallet that can store your Ethereum, and is
            needed to purchase and mint Da Bunny. Having a wallet gives you an
            Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be
            stored. Learn more about Metamask and how easy it is to use over
            here! (https://metamask.io/)
          </Paragraph>
        </QuestionWrap>
        <ClickShow onClick={toggleShow} expanded={expanded}>
          More
          <Arrow />
        </ClickShow>
        <DropDown expanded={expanded}>
          <TextHeader>What is OpenSea?</TextHeader>
          <QuestionWrap>
            <Paragraph>
              OpenSea is a peer-to-peer marketplace for crypto collectibles and
              non-fungible tokens. It serves as a secondary market for NFTs. Da
              Bunny NFT Collection can be traded on OpenSea (Da Bunny NFT)
              (https://opensea.io/)
            </Paragraph>
          </QuestionWrap>
        </DropDown>
      </InnerLimit>
      <BubblesImage>
        <Image width={1440} height={443} src="/img/bubbles_yellow.png" alt="" />
      </BubblesImage>
    </Section>
  )
}

export default Faq
