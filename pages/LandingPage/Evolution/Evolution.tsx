import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import ContentDesktop from './ContentDesktop'
import ContentMobile from './ContentMobile'
import CarrotHeader from '../../../src/components/Shared/CarrotHeader/CarrotHeader'
import { fonts } from '../../../src/styles/typography'

const Section = styled.section`
  background-color: #ffd74d;
  position: relative;
  overflow: hidden;
  min-height: 30rem;
`

const BubblesImage = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  width: 100%;
  img {
    width: 100vw;
    height: auto;
  }
`

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
`

const InnerWrap = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 950px;
  }
`

const BottomText = styled.p`
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }

  @media (max-width: 1440px) {
    margin-top: 30px;
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
  }

  @media (max-width: 1250px) {
    padding: 50px 48px 10px 48px;
  }

  @media (max-width: 800px) {
    padding: 0 0 10px 0;
    text-align: center;
    padding: 0 48px;
  }

  @media (max-width: 768px) {
    font-size: ${fonts.font24.w768.fontSize};
    line-height: ${fonts.font24.w768.height};
  }

  @media (max-width: 500px) {
    font-size: ${fonts.font24.w500.fontSize};
    line-height: ${fonts.font24.w500.height};
  }
`

const FunnyBunniesImage = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  top: 10px;
  position: relative;
  @media (max-width: 1660px) {
    max-width: 1050px;
  }
  @media (max-width: 800px) {
    margin-top: 0;
    width: 110%;
    left: -5%;
  }
`

const Evolution = () => {
  const [isMobile, setIsMobile] = useState(false)

  const resizeEventHandle = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    resizeEventHandle()
    window.addEventListener('resize', resizeEventHandle)
    return () => {
      window.removeEventListener('resize', resizeEventHandle)
    }
  }, [])

  return (
    <Section id="rabbit">
      <BubblesImage>
        <Image
          width={1440}
          height={336}
          src="/img/bubbles_blue_up.png"
          alt=""
        />
      </BubblesImage>
      <InnerWrap>
        <HeaderWrap>
          <CarrotHeader
            bgColor="#FFEDAF"
            padding="1.5625rem 4.0625rem 25px 6.875rem"
          >
            Evolution of Da Bunny
          </CarrotHeader>
        </HeaderWrap>
        {isMobile ? <ContentMobile /> : <ContentDesktop />}
        <BottomText>
          It soon occurred to another rabbit that crypto trade way more carrots
          with humans than chocolate eggs. It soon occured to yet another rabbit
          that carrots are too bland for his taste, and he ordered pizza for the
          first time. The “Aha!” moments continued to cascade and one day, a
          tribe member decided to take funny portraits of everyone on the island
          and sell online as NFTs - and this gives rise to Da Bunny!
        </BottomText>
      </InnerWrap>
      <FunnyBunniesImage>
        <Image width={1440} height={443} src="/img/funny_bunies.png" alt="" />
      </FunnyBunniesImage>
    </Section>
  )
}

export default Evolution
