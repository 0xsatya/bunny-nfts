import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import fonts from '../../styles/typography'
import { nftaddress } from '../../utils/config'
import validator from 'validator'
import { DISCORD_LINK } from '../../links/Links'

const Section = styled.section`
  background-color: #ffd74c;
  height: 44.375rem;
  position: relative;
  padding: 3.125rem 0 0 0;
  @media (max-width: 1100px) {
    height: unset;
    padding: 0;
  }
  @media (max-width: 768px) {
  }
`

const InnerWrap = styled.div`
  padding: 0 32px;
  @media (max-width: 768px) {
    position: relative;
    top: -280px;
  }
`

const BunnyImage = styled.div`
  position: absolute;
  z-index: 3;
  left: -4.6875rem;
  top: -19.1875rem;
  width: 25.9375rem;
  @media (max-width: 1100px) {
    position: relative;
    left: -30px;
    top: 80px;
  }
  @media (max-width: 500px) {
    width: 250px;
    left: -25px;
    top: 55px;
  }
`

const LandscapeImage = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 1110px) {
    bottom: 0;
  }
  @media (max-width: 768px) {
    bottom: 0;
  }
`

const SmartContractWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

const SmartLeft = styled.div`
  @media (max-width: 1100px) {
    order: 1;
    text-align: center;
    margin-top: 60px;
  }
`

const TextTop = styled.p`
  font-weight: 700;
  font-size: ${fonts.font40.w1920.fontSize};
  line-height: ${fonts.font40.w1920.height};
  @media (max-width: 1660px) {
    font-size: ${fonts.font40.w1660.fontSize};
    line-height: ${fonts.font40.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font40.w1440.fontSize};
    line-height: ${fonts.font40.w1440.height};
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font40.w768.fontSize};
    line-height: ${fonts.font40.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font40.w500.fontSize};
    line-height: ${fonts.font40.w500.height};
  }
`

const TextMiddle = styled.a`
  font-weight: bold;
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  color: #4a7a72;
  text-decoration: underline;
  margin-top: 25px;
  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
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

const TokenBottom = styled.p`
  font-weight: 700;
  font-size: ${fonts.font24.w1920.fontSize};
  line-height: ${fonts.font24.w1920.height};
  margin-top: 35px;
  margin-bottom: 14px;
  word-break: break-all;
  @media (max-width: 1660px) {
    font-size: ${fonts.font24.w1660.fontSize};
    line-height: ${fonts.font24.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font24.w1440.fontSize};
    line-height: ${fonts.font24.w1440.height};
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

const SmartRight = styled.a`
  position: relative;
  padding-top: 4.375rem;
  @media (max-width: 1100px) {
    order: 0;
    padding-top: 0;
  }
`

const TextRight = styled.p`
  width: 334.3px;
  height: 135.34px;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 600;
  font-size: 27.7619px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  padding: 2rem 20px 20px 20px;
  text-align: center;
  background: #e7d7f4;
  border: 3.5px solid #000000;
  box-shadow: 9px 9px 0 #000000;
  border-radius: 12px;
  height: 6rem;
  @media (max-width: 1660px) {
    font-size: 27.7619px;
  }
  @media (max-width: 1440px) {
    font-size: 27.7619px;
    line-height: ${fonts.font20.w1440.height};
  }
  @media (max-width: 1100px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font20.w768.fontSize};
    line-height: ${fonts.font20.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font20.w500.fontSize};
    line-height: ${fonts.font20.w500.height};
    width: 200px;
    height: unset;
    padding: 32px 20px 20px 20px;
  }
`

const Links = styled.ul`
  position: relative;
  z-index: 1;
  margin-top: 120px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Item = styled.li`
  list-style: none;
  padding: 0 3.125rem;
  font-weight: 700;
  font-size: ${fonts.font20.w1920.fontSize};
  line-height: ${fonts.font20.w1920.height};
  @media (max-width: 1660px) {
    font-size: ${fonts.font20.w1660.fontSize};
    line-height: ${fonts.font20.w1660.height};
  }
  @media (max-width: 1440px) {
    font-size: ${fonts.font20.w1440.fontSize};
    line-height: ${fonts.font20.w1440.height};
  }
  @media (max-width: 1100px) {
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    font-size: ${fonts.font20.w768.fontSize};
    line-height: ${fonts.font20.w768.height};
  }
  @media (max-width: 500px) {
    font-size: ${fonts.font20.w500.fontSize};
    line-height: ${fonts.font20.w500.height};
  }

  a {
    white-space: nowrap;
  }
`

const Copyright = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const EmailSubscribe = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const CustomInputText = styled.input`
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 11px;
  width: 471px;
  height: 68px;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 32px;
  color: #b5b5b5;
  margin-right: 15px;
  padding: 0 12px;
`
const CustomInputBtn = styled.input`
  background: #96ebba;
  border: 3px solid #000000;
  box-sizing: border-box;
  box-shadow: 3px 4px 0px #000000;
  border-radius: 11px;
  font-family: Space Grotesk;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 38px;
  color: #000000;
  width: 142px;
  height: 68px;
  padding: 0 12px;
  cursor: pointer;
`
const Paragraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  padding-bottom: 100px;
`

const DisplayMessage = styled.div`
  color: red;
  text-align: left;
  position: relative;
  z-index: 1;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
const Loader = styled.p`
  color: black;
  text-align: center;
  position: relative;
  z-index: 1;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
interface Props {
  address: string
  balance: number
  network: string
}

const Footer = ({ address, balance, network }: Props) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onEmailSubscribeHandle = async () => {
    setMessage('')
    if (!validator.isEmail(email)) {
      setMessage('Please enter a valid email id')
      return false
    } else {
      let emailData = {
        emailId: email,
        userAddress: address,
      }

      try {
        let response = await fetch('/api/emails', {
          method: 'POST',
          body: JSON.stringify(emailData),
        })
        let data = await response.json()
        console.log('Response from server: ', response, data)
        setMessage(data.message)
      } catch (err) {
        console.log('Error while updating data to Backend', err)
      }
    }
    console.log('Email id is : ', email)
  }

  return (
    <Section>
      <InnerWrap>
        <SmartContractWrap>
          <SmartLeft>
            <TextTop>Verified Smart Contract:</TextTop>
            <TextMiddle
              target="_blank"
              rel="noopener"
              href={'https://rinkeby.etherscan.io/address/' + nftaddress}
            >
              View on Etherscan
            </TextMiddle>
            <TokenBottom>{nftaddress ? nftaddress : '0x...'}</TokenBottom>
            <EmailSubscribe>
              <CustomInputText
                type="text"
                name="email"
                id="emailId"
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInputBtn
                type="button"
                value="Join"
                onClick={onEmailSubscribeHandle}
              />
              <DisplayMessage>{message}</DisplayMessage>
            </EmailSubscribe>
          </SmartLeft>

          <SmartRight target="_blank" rel="noopener" href={DISCORD_LINK}>
            <BunnyImage>
              <Image
                width={415}
                height={483}
                src="/img/Discord Bunny GIF.gif"
                alt=""
              />
            </BunnyImage>
            <TextRight>Join our Discord Channel</TextRight>
          </SmartRight>
        </SmartContractWrap>
        <Links>
          <Item>
            <Link href="/privacy">
              <a>Private Policy &#38; Connect Wallet</a>
            </Link>
          </Item>
        </Links>
        <Copyright>
          <Paragraph>
            @2021 Da Bunny NFT <br></br>
            Produced by MoonLab Co., a Decentalized Autonomous Organization
            (DAO)
          </Paragraph>

          <Paragraph>@2022 Da Bunny NFT</Paragraph>

          {/* <Paragraph>Produced from Bunny Land</Paragraph> */}
        </Copyright>
      </InnerWrap>
      <LandscapeImage>
        <Image width={1439} height={316} src="/img/landscape.png" alt="" />
      </LandscapeImage>
    </Section>
  )
}

export default Footer
