import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import CarrotHeader from '../Shared/CarrotHeader/CarrotHeader'
import fonts from '../../styles/typography'

const Section = styled.section`
  background: #be6dff;
  position: relative;
  min-height: 30rem;
  padding: 150px 32px 200px 32px;
  @media (max-width: 1000px) {
    padding: 80px 32px 200px 32px;
  }
  @media (max-width: 500px) {
    padding: 80px 0 200px 16px;
  }
`

const HeaderWrap = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    padding-right: 16px;
  }
`

const EggsImages = styled.div<{ height: number }>`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height * 2}px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1300px) {
    top: 30px;
  }

  @media (max-width: 900px) {
    height: ${({ height }) => height * 3}px;
  }
`

const EggsList = styled.ul`
  position: relative;
  max-width: 1220px;
  margin: 150px auto 0 auto;
  border-radius: 23px;
  padding: 45px 45px 190px 70px;

  @media (max-width: 500px) {
    padding: 26px 32px 120px 40px;
  }
`

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 1220px;
  height: 360px;
  z-index: 0;

  @media (max-width: 1600px) {
    height: 370px;
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 786px) {
    display: none;
  }
`

const BackgroundMobile = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  z-index: 0;

  @media (max-width: 786px) {
    display: block;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

const BackgroundMobileSmall = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  z-index: 0;

  @media (max-width: 500px) {
    display: block;
  }
`

const TopImage = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 434px;
  right: 31px;
  @media (max-width: 1660px) {
    bottom: 240px;
  }
  @media (max-width: 1150px) {
    bottom: 270px;
  }
  @media (max-width: 1000px) {
    position: relative;
    left: 50%;
    right: unset;
    transform: translateX(-50%);
    bottom: 0;
    width: 400px;
    height: 235px;
    margin-top: -50px;
  }
  @media (max-width: 600px) {
    width: 280px;
    height: 115px;
    margin-top: 0;
  }
  @media (max-width: 450px) {
    width: 200px;
    height: 40px;
    margin-top: -20px;
  }
`

const ListItem = styled.li`
  font-size: ${fonts.font24.w1920.fontSize};
  font-weight: 600;
  margin-bottom: 22px;
  line-height: 100%;
  position: relative;
  z-index: 1;
  span {
    color: #be6dff;
  }

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    margin-bottom: 12px;
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

const Title = styled.h3`
  font-size: ${fonts.font24.w1920.fontSize};
  text-align: center;
  margin-bottom: 24px;
  z-index: 1;
  position: relative;

  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    margin-bottom: 12px;
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

const Text = styled.p`
  font-size: ${fonts.font20.w1920.fontSize};
  text-align: center;
  z-index: 1;
  position: relative;
  span {
    font-weight: 700;
  }
  @media (max-width: 1600px) {
    font-size: ${fonts.font20.w1660.fontSize};
  }

  @media (max-width: 1440px) {
    font-size: ${fonts.font20.w1660.fontSize};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 530px) {
    font-size: 10px;
    line-height: 12px;
  }
`

const BubbleImage = styled.div`
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

const EggListOuterWrap = styled.div`
  position: relative;
  max-width: 1220px;
  margin: 0 auto;
`

const EggsInfoList = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: center;

  //adjust every box to egg image

  > div:nth-of-type(1) {
    @media (max-width: 768px) {
      position: relative;
      left: -10px;
    }
    .text-position-fix {
      padding: 0 15%;
      top: 50px;
      position: relative;
      @media (max-width: 768px) {
        top: 10px;
      }
    }
    .egg-position-fix {
      top: 0;
    }
  }

  > div:nth-of-type(2) {
    @media (max-width: 768px) {
      position: relative;
      left: -10px;
    }
    .text-position-fix {
      padding: 0 17.5%;
    }
    .egg-position-fix {
      top: -10px;
      @media (max-width: 1300px) {
        top: 0;
      }
    }
  }

  > div:nth-of-type(3) {
    .text-position-fix {
      padding: 0 12%;
      top: 40px;
      left: -20px;
      position: relative;
      @media (max-width: 1440px) {
        padding: 0 20%;
      }
    }
    .egg-position-fix {
      top: 25px;
    }
  }

  > div:nth-of-type(4) {
    .text-position-fix {
      padding: 0 15%;
      padding-top: 50px;
      position: relative;
      @media (max-width: 1440px) {
        left: -15px;
      }
      @media (max-width: 540px) {
        padding-top: 40px;
      }
      p {
        width: 90%;
        margin: 0 auto;
        display: block;
      }
    }
    .egg-position-fix {
      top: 0;
    }
  }

  > div:nth-of-type(5) {
    .text-position-fix {
      padding: 0 10%;
      position: relative;
      top: -20px;
    }
    .egg-position-fix {
      top: 5px;
      @media (max-width: 1300px) {
        top: 0;
      }
    }
  }

  > div:nth-of-type(6) {
    .text-position-fix {
      padding: 0 10%;
      position: relative;
      left: -20px;
      top: -10px;
      @media (max-width: 1440px) {
        padding: 0 15%;
      }
      @media (max-width: 1200px) {
        top: 30px;
      }
    }
    .egg-position-fix {
      top: 40px;
      @media (max-width: 1300px) {
        top: 20px;
      }
    }
  }
`

const EggsInfo = styled.div`
  flex-basis: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    flex-basis: calc(100% / 2);
  }

  &&:hover {
    animation: shake 0.8s cubic-bezier(0.37, 0.08, 0.2, 0.91) both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
    backface-visibility: hidden;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-2px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-3px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(1px, 0, 0);
    }
  }
`

const EggImageWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media (max-width: 1300px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 900px) {
  }
`

const EggsData = () => {
  return (
    <EggsInfoList>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Rarity.Tools</Title>
          <Text>
            for generative art attributes ranking and rarity lookup dedicated to
            registered NFT collections only
          </Text>
        </div>
        <EggImageWrap className="egg-position-fix">
          <Image width={424} height={628} src="/img/all_eggs_01.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Price</Title>
          <Text>0.12 ETH to unlock any DaBunny</Text>
        </div>
        <EggImageWrap className="egg-position-fix" id="firstEgg">
          <Image width={417} height={628} src="/img/all_eggs_02.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Ownership & Commercial Usage Rights</Title>
          <Text>assigned to Da Bunny NFT holders</Text>
        </div>
        <EggImageWrap className="egg-position-fix">
          <Image width={443} height={628} src="/img/all_eggs_03.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Personalized Da Bunny Digital & Physical Merchandise</Title>
          <Text>
            Exclusive Access for <span>all current NFT holders</span> (details
            to be released on Discord)
          </Text>
        </div>
        <EggImageWrap className="egg-position-fix">
          <Image width={424} height={627} src="/img/all_eggs_04.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Community Wallet</Title>
          <Text>
            funded by Da Bunny NFT ERC-20 token proceeds to support community
            events and marketing costs
          </Text>
        </div>
        <EggImageWrap className="egg-position-fix">
          <Image width={417} height={627} src="/img/all_eggs_05.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
      <EggsInfo>
        <div className="text-position-fix">
          <Title>Periodic Giveaways</Title>
          <Text>
            to reward Da Bunny NFT holders for being part of the family
          </Text>
        </div>
        <EggImageWrap className="egg-position-fix">
          <Image width={443} height={627} src="/img/all_eggs_06.png" alt="" />
        </EggImageWrap>
      </EggsInfo>
    </EggsInfoList>
  )
}

const EggsHeaderDetails = () => {
  return (
    <EggListOuterWrap>
      <TopImage>
        <Image
          width={486 / 1.5}
          height={605 / 1.5}
          src="/img/DB_Rabbit_Hole_GIF.gif"
          alt=""
        />
      </TopImage>
      <EggsList>
        <Background alt="" src="img/rec-background.png" />
        <BackgroundMobile alt="" src="img/rec-background-mobile.png" />
        <BackgroundMobileSmall
          alt=""
          src="img/rec-background-mobile-small.png"
        />
        <ListItem>Discord-based community for all DaBunny members</ListItem>
        <ListItem>
          Access to DaBunnyDAO, a fully-decentralized organization where NFT
          holders get to vote on community decisions and propose exciting new
          events (https://snapshot.org/#/dabunny)
        </ListItem>
        <ListItem>
          Exclusive access to DaBunny Island, a metaverse campground for live
          music events and 24/7 music streaming channel with your DaBunny avatar
        </ListItem>
        <ListItem>
          We support Real Bunnies globally by donating to support the work of
          PETA to end animal cruelty (donation wallet)
        </ListItem>
      </EggsList>
    </EggListOuterWrap>
  )
}

const Eggs = () => {
  const [listHeight, setListHeight] = useState(0)

  const resizeEventHandle = () => {
    const eggImage = document
      .getElementById('firstEgg')
      ?.getElementsByTagName('img')[0] as HTMLElement
    const imageHeight = eggImage.offsetHeight
    setListHeight(imageHeight)
  }

  useEffect(() => {
    resizeEventHandle()
    window.addEventListener('resize', resizeEventHandle)
    return () => {
      window.removeEventListener('resize', resizeEventHandle)
    }
  }, [])

  return (
    <Section>
      <HeaderWrap>
        <CarrotHeader bgColor="#ECD6FF" padding="1.5625rem 32px 25px 80px">
          Welcome Down the Rabbit Hole... to Our Community!
        </CarrotHeader>
      </HeaderWrap>
      <EggsHeaderDetails />
      <EggsImages height={listHeight}>
        <EggsData />
      </EggsImages>
      <BubbleImage>
        <Image width={1440} height={436} src="/img/bubbles_green.png" alt="" />
      </BubbleImage>
    </Section>
  )
}

export default Eggs
