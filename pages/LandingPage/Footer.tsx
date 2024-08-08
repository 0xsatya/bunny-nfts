import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import validator from 'validator'
import { fonts } from '../../src/styles/typography'

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
  top: -22.1875rem;
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
  font-size: ${fonts.font20.w1920.fontSize};
  line-height: ${fonts.font20.w1920.height};
  font-weight: 600;
  padding: 2rem 20px 20px 20px;
  text-align: center;
  background: #e7d7f4;
  border: 3.5px solid #000000;
  box-shadow: 9px 9px 0 #000000;
  border-radius: 12px;
  width: 20.9375rem;
  height: 6rem;
  @media (max-width: 1660px) {
    font-size: ${fonts.font20.w1660.fontSize};
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
    width: 200px;
    height: unset;
    padding: 32px 20px 20px 20px;
  }
`

const Links = styled.ul`
  position: relative;
  z-index: 1;
  margin-top: 420px;
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
  width: 200px;
  height: 35px;
  background: #fff;
  font-size: 14px;
  line-height: 16px;
  color: #7e7e7e;
  border: 0;
  padding: 0 12px;
  border-radius: 4px 0 0 4px;
`
const CustomInputBtn = styled.input`
  width: 100px;
  height: 35px;
  background: #524fe9;
  font-size: 14px;
  line-height: 16px;
  color: #fffefe;
  border: 0;
  padding: 0 12px;
  border-radius: 0 4px 4px 0;
`
const Paragraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  padding-bottom: 100px;
`

const DisplayMessage = styled.div`
  color: red;
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
          {/* <SmartLeft>
            <TextTop>Verified Smart Contract:</TextTop>
            <TextMiddle target="_blank" rel="noopener" href={"https://rinkeby.etherscan.io/address/"+nftaddress}>View on Etherscan</TextMiddle>
            <TokenBottom>{nftaddress? nftaddress : '0x...'}</TokenBottom>
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
          </SmartRight> */}
        </SmartContractWrap>
        <Links>
          <Item>
            <Link href="/">
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
          {/* <Paragraph>Produced from Bunny Land</Paragraph> */}
        </Copyright>
        <EmailSubscribe>
          <CustomInputText
            type="text"
            name="email"
            id="emailId"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInputBtn
            type="button"
            value="Subscribe"
            onClick={onEmailSubscribeHandle}
          />
          <DisplayMessage>{message}</DisplayMessage>
        </EmailSubscribe>
      </InnerWrap>
      <LandscapeImage>
        <Image width={1439} height={316} src="/img/landscape.png" alt="" />
      </LandscapeImage>
    </Section>
  )
}

export default Footer
