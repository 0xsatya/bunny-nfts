import React, { useState, useEffect, ReactChild } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ConnectButton from './ConnectButton/ConnectButton'
import MintButton from './MintButton/MintButton'
import { fonts } from '../../../src/styles/typography'
import { DISCORD_LINK } from '../../../src/utils/Links'

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin-bottom: -10px;
  padding-top: 125px;
  position: relative;
  height: 1056px;
  @media (max-height: 900px) and (min-width: 1001px) {
    padding-top: 100px;
  }
  @media (max-width: 1660px) {
    height: 630px;
  }
  @media (max-width: 1000px) {
    height: 670px;
  }
  @media (max-width: 620px) {
    height: 620px;
  }
  @media (max-width: 500px) {
    height: 710px;
  }
  @media (max-width: 400px) {
    height: 640px;
  }
`

const BannerImage = styled.div`
  position: relative;
  z-index: 0;
  padding: 0 24px;
  height: 800px;
  @media (max-width: 1660px) {
    height: 390px;
  }
  @media (max-width: 1000px) {
    height: 340px;
  }
  @media (max-width: 768px) {
    height: 335px;
  }
  @media (max-width: 500px) {
    height: 370px;
  }
  @media (max-width: 400px) {
    height: 320px;
  }
`

const BunnyImage = styled.div`
  position: absolute;
  z-index: 1;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 605px;
  @media (max-width: 1660px) {
    height: calc(605px / 1.5);
    top: 250px;
  }
  @media (max-width: 768px) {
    min-width: 400px;
  }
  @media (max-width: 500px) {
    min-width: 320px;
    top: 240px;
  }
  @media (max-width: 400px) {
    min-width: 290px;
    top: 224px;
  }
`

const BubbleImage = styled.div`
  position: relative;
  z-index: 0;
  top: -27vw;
  width: 100%;
  @media (max-width: 1200px) {
    top: -25vw;
  }
  @media (max-width: 768px) {
    top: -100px;
  }
  @media (max-width: 500px) {
    top: -25px;
  }
  img {
    width: 100vw;
    height: auto;
  }
`

const JoinBoxDesktop = styled.div`
  position: relative;
  top: -500px;
  right: 160px;
  z-index: 1;
  text-align: right;
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1660px) {
    top: -150px;
    right: 180px;
  }
  @media (max-width: 1150px) {
    display: none;
  }
  svg {
    width: 214px;
  }
`

const JoinBoxMobile = styled.div`
  position: relative;
  z-index: 5;
  text-align: center;
  top: 6rem;
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  display: none;
  @media (max-width: 1150px) {
    display: block;
  }
  svg {
    width: 214px;
    @media (max-width: 500px) {
      width: 166px;
    }
  }
`

const JoinCta = styled.p`
  font-size: ${fonts.font20.w1920.fontSize};
  @media (max-width: 1600px) {
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

const MintBox = styled.div`
  position: absolute;
  box-shadow: 0px 8px 0px 0px #000000;
  border-radius: 34px;
  border: 4px solid #000000;
  background: #87eef4;
  padding: 60px 125px 50px 125px;
  z-index: 5;
  top: 670px;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: 1660px) {
    box-shadow: 0px 7px 0px 0px #000000;
    padding: 45px 70px 35px 70px;
    top: 520px;
  }

  @media (max-width: 768px) {
    box-shadow: 0px 4px 0px 0px #000000;
    padding: 15px 50px 20px 50px;
    border: 3px solid #000000;
  }

  @media (max-width: 400px) {
    top: 500px;
    padding: 15px 40px 20px 40px;
  }
`

const MintTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-of-type {
    margin-right: 20px;
    :active {
      background: #ccc;
    }
    @media (max-width: 1660px) {
      margin-right: 12px;
    }
  }
  > div:last-of-type {
    margin-left: 20px;
    @media (max-width: 1660px) {
      margin-left: 12px;
    }

    @media (max-width: 768px) {
      margin-left: 8px;
    }
  }

  > div {
    background: #ffffff;
    border: 4px solid #000000;
    box-sizing: border-box;
    border-radius: 39.5px;
    letter-spacing: 0.04em;
    color: #000000;
    align-items: center;
    text-align: center;
    display: flex;
    font-weight: 600;
    padding: 10px 50px;

    :hover {
      cursor: pointer;
      background-color: #ddd;
    }
    :focus {
      background-color: #4a7a72;
      color: #ffffff;
    }
    @media (max-width: 1200px) {
      padding: 8px 35px;
    }

    @media (max-width: 768px) {
      padding: 0 12px;
      border: 3px solid #000000;
    }

    p {
      font-weight: 600;
      font-size: 30px;
      margin-left: 12px;

      @media (max-width: 1660px) {
        font-size: 22px;
      }

      @media (max-width: 1200px) {
        font-size: 16px;
        margin-left: 8px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        margin-left: 5px;
      }
    }
  }

  svg {
    @media (max-width: 1200px) {
      width: 18px;
    }

    @media (max-width: 768px) {
      width: 12px;
    }
  }
`

const MintMiddle = styled.div`
  display: flex;
  background: #d7a6ff;
  border: 4px solid #000000;
  border-radius: 39.5px;
  justify-content: center;
  font-size: 30px;
  padding: 10px 50px 15px 50px;
  font-weight: 600;

  @media (max-width: 1660px) {
    font-size: 22px;
    padding: 8px 35px 12px 35px;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
    padding: 6px 22px 8px 22px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 16px 6px 16px;
    border: 3px solid #000000;
  }

  p {
    padding: 0 80px;

    @media (max-width: 1660px) {
      padding: 0 55px;
    }

    @media (max-width: 1200px) {
      padding: 0 35px;
    }
  }

  div {
    cursor: pointer;
  }
`

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 1;
  font-weight: 700;
  font-size: 30px;

  @media (max-width: 1200px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
  }
`

const Rarity = styled.p`
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  text-align: right;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.04em;
  margin: 15px 0 30px 0;
  @media (max-width: 1660px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 20px;
    margin: 10px 0 20px 0;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
`

const Limit = styled.p`
  margin: 15px 0 35px 0;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.04em;
  @media (max-width: 1660px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 20px;
    margin: 10px 0 20px 0;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
`

const Symbol = ({
  children,
  onRarityPriceClicked,
  tabindex,
}: {
  children: ReactChild
  onRarityPriceClicked: any
  tabindex: string
}) => {
  return (
    <div onClick={onRarityPriceClicked} tabIndex={Number(tabindex)}>
      <svg
        width="23"
        height="37"
        viewBox="0 0 23 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4169 27.7026L0.059082 20.9998L11.41 37.0012L22.7736 20.9998L11.41 27.7026H11.4169ZM11.5857 0L0.23252 18.8434L11.5857 25.5578L22.9436 18.8503L11.5857 0Z"
          fill="black"
        />
      </svg>
      <p>{children}</p>
    </div>
  )
}

const Arrow = () => {
  return (
    <svg
      width="263"
      height="17"
      viewBox="0 0 263 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="15"
        x2="261"
        y2="15"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="233.63"
        y1="2.9601"
        x2="259.96"
        y2="14.3697"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface Props {
  provider: any
  onMintToken: any
  address: string
  balance: number
  network: string
}

const Hero = ({ provider, address, balance, network, onMintToken }: Props) => {
  const [resizeFactor, setResizeFactor] = useState(1)
  const [bunnyCount, setBunnyCount] = useState(1)
  const [showMintBox, setShowMintBox] = useState(true)
  const [isRarity, setIsRarity] = useState(false)
  const [mintBtnText, setMintBtnText] = useState('Mint')

  const onMintToken1 = async (e: any) => {
    e.preventDefault()
    console.log('onMintToken1 clicked...', e.target)
    setMintBtnText('Minting...')
    // e.target.value = 'Minting...';
    await onMintToken(e, bunnyCount, isRarity)
    // e.target.value ='Minited Tokens';
    setMintBtnText('Mint')
  }

  const onRarityPriceClicked = (e: any) => {
    console.log('Clicked Item: ', e)

    let price = e.currentTarget.innerText
    console.log('CurrentTarget', e.currentTarget)
    console.log('Price selected:', price)

    if (price === '0.08') setIsRarity(false)
    else setIsRarity(true)
  }

  const resizeEventHandle = () => {
    const windowWidth = window.innerWidth
    switch (true) {
      case windowWidth > 1660:
        setResizeFactor(1.5)
        break
      default:
        setResizeFactor(1.85)
        break
    }
  }

  const amountChange = (amount: string) => {
    switch (amount) {
      case 'increase':
        bunnyCount < 25 && setBunnyCount(bunnyCount + 1)
        break
      case 'decrease':
        bunnyCount > 1 && setBunnyCount(bunnyCount - 1)
        break
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
    <Section>
      <BannerImage>
        <Image
          width={990 / resizeFactor}
          height={560 / resizeFactor}
          src="/img/banner.png"
          alt=""
        />
      </BannerImage>
      <JoinBoxDesktop>
        <a rel="noreferrer" target="_blank" href={DISCORD_LINK}>
          <Arrow />
          <JoinCta>Join our Discord Channel</JoinCta>
        </a>
      </JoinBoxDesktop>
      <BunnyImage>
        <Image
          width={605 / resizeFactor}
          height={605 / resizeFactor}
          src="/img/Da Bunny Homepage Shuffle.gif"
          alt=""
        />
      </BunnyImage>
      <ConnectButton setShowMintBox={setShowMintBox} />
      <JoinBoxMobile>
        <a rel="noreferrer" target="_blank" href={DISCORD_LINK}>
          <Arrow />
          <JoinCta>Join our Discord Channel</JoinCta>
        </a>
      </JoinBoxMobile>
      <BubbleImage>
        <Image width={1440} height={463} src="/img/bubbles.png" alt="" />
      </BubbleImage>
      {showMintBox && (
        <MintBox>
          <Close onClick={() => setShowMintBox(false)}>X</Close>
          <MintTop>
            <Symbol onRarityPriceClicked={onRarityPriceClicked} tabindex="1">
              0.08
            </Symbol>
            <Symbol onRarityPriceClicked={onRarityPriceClicked} tabindex="2">
              0.12
            </Symbol>
          </MintTop>
          <Rarity>(3x Rarity Boost)</Rarity>
          <MintMiddle>
            {bunnyCount > 1 && (
              <div onClick={() => amountChange('decrease')}>-</div>
            )}
            <p>{bunnyCount}</p>
            {bunnyCount < 25 && (
              <div onClick={() => amountChange('increase')}>+</div>
            )}
          </MintMiddle>
          <Limit>25 MAX</Limit>
          <MintButton onMintToken1={onMintToken1} mintBtnText={mintBtnText} />
        </MintBox>
      )}
    </Section>
  )
}

export default Hero
