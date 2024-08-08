import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { NextPage } from 'next'
import Head from 'next/head'
import Faq from '../src/components/LandingPage/Faq'
import Hero from '../src/components/LandingPage/Hero/Hero'
import NavBar from '../src/components/Shared/NavBar/NavBar'
import WhatDa from '../src/components/LandingPage/WhatDa'
import Community from '../src/components/LandingPage/Community'
import Footer from '../src/components/LandingPage/Footer'
import Roadmap from '../src/components/LandingPage/Roadmap/Roadmap'
import Evolution from '../src/components/LandingPage/Evolution/Evolution'
import Eggs from '../src/components/LandingPage/Eggs'
import BunniesCarousel from '../src/components/LandingPage/BunniesCarousel'

import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import MintBox from '../src/components/LandingPage/MintBox/MintBox'

import { getNFTAddress, getNFTContract } from '../src/utils/web3lib'
import { Int32 } from 'bson'
import Loader from '../src/components/Shared/Loader/Loader'
import LandingPageCarousel from '../src/components/LandingPage/LandingPageCarousel'
const LandingWrap = styled.main`
  overflow: hidden;
`

const DaBunny_NFT_Address = process.env.NEXT_PUBLIC_DABUNNY_NFTCONTRACT_ADDRESS
const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_API_KEY_1

const Home: NextPage = () => {
  const [networkName, setNetworkName] = useState('')
  const [provider, setProvider] = useState<Web3Provider>()
  const [userBalance, setUserBalance] = useState(0)
  const [address, setAddress] = useState('')
  const [userData, setUserData] = useState({
    address: '',
    balance: 0,
    network: '',
  })
  const [message, setMessage] = useState('')
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID, // required
      },
    },
  }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  })
  interface assetD {
    buyerAddress: string
    normalTokenIds: number[]
    rareTokenIds: number[]
    totalPricePaid: number
    emailId: string
    subscribeStatus: boolean
    purchasedTimeStamp: number
  }

  let assetData: assetD = {
    buyerAddress: '',
    normalTokenIds: [],
    rareTokenIds: [],
    totalPricePaid: 0,
    emailId: '',
    subscribeStatus: false,
    purchasedTimeStamp: 0,
  }

  //It is called when mint button is pressed.
  const onMintToken = async (
    e: any,
    tokenCount: number,
    isPresell: boolean
  ) => {
    console.log(tokenCount, isPresell)

    let tokenPrice = isPresell ? 0.08 : 0.12
    console.log('onMintToken called ...', tokenCount, tokenPrice)

    console.log('Dabunny address:', DaBunny_NFT_Address)
    console.log('nft address from web3lib:', getNFTAddress())
    if (provider) {
      let signer = provider.getSigner()
      const accountAddress = await signer.getAddress()
      console.log(accountAddress)

      const nftContract = await getNFTContract(signer)
      try {
        // let receipt = await tx.wait()
        const price = ethers.utils.parseEther(
          (tokenPrice * tokenCount).toString()
        )
        console.log('Price of asset:', price.toString())
        let receipt = await nftContract
          .adoptBunny(tokenCount, { value: price })
          .then(
            async (tx: any) => {
              return tx.wait().then((receipt: any) => {
                console.log('Receipt:', receipt)
                let tokenIds: number[] = []
                receipt.events.forEach((event: any) => {
                  tokenIds.push(Number(event.args[2]))
                })
                // let value = receipt.events[0].args[2];
                // let tokenId = value.toNumber();
                // console.log("TokenId minted::", tokenId);
                try {
                  if (!isPresell) assetData.normalTokenIds = tokenIds
                  if (isPresell) assetData.rareTokenIds = tokenIds
                  assetData.buyerAddress = userData.address
                  assetData.totalPricePaid = Number(tokenPrice * tokenCount)
                  assetData.purchasedTimeStamp = Number(new Date())

                  let response = fetch('/api/assets', {
                    method: 'POST',
                    body: JSON.stringify(assetData),
                  })
                } catch (err) {
                  console.log('Error while updating data to Backend', err)
                }

                return {
                  status: 'Success',
                  data: 'TokenId:' + tokenIds.toString(),
                  error: '',
                }
              })
            },
            (error: any) => {
              console.log('ERROR occured1::', error)
              let errMess = error.message.startsWith('MetaMask')
                ? error.message
                : error.error.message
                ? error.error.message
                : error.message
              return {
                status: 'Failed',
                data: '',
                error: errMess,
              }
            }
          )

        console.log('Fianl Status :: receipt::', receipt)
        if (receipt.status === 'Failed') setMessage(receipt.error)
        else setMessage(receipt.data)
      } catch (err: any) {
        console.log('Minting Failed:', err.message)
        setMessage('Minting Failed: ' + err.message)
      }
    } else {
      console.log('Please login to wallet')
      alert('Please login to Connect to Wallet')
    }
  }

  //It is called when connect wallet button is clicked
  const onConnectWallet = async () => {
    console.log('Wallet connect clicked...')

    if (!userData.address) {
      let web3Modal = new Web3Modal({
        //network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions, // required
      })
      web3Modal.clearCachedProvider()
      let web3provider = await web3Modal.connect()
      console.log('Web3Modal.connect::', web3provider)

      web3provider = new Web3Provider(web3provider)
      console.log('web3provider::', web3provider)
      setProvider(web3provider)

      if (web3provider) {
        let networkdata = await web3provider.getNetwork()
        console.log('Network Data::', networkdata)
        console.log('Name:', networkdata.name)
        console.log(networkdata.name)
        if (networkdata.name !== 'maticmum') {
          setMessage('Please switch to maticmum network')
          console.log('Please switch to maticmum network')
        }

        let signer = web3provider.getSigner()
        console.log('signer:', signer)

        let add = await signer.getAddress()
        console.log('address: ', add)
        let bal = Number(
          ethers.utils.formatEther((await signer.getBalance()).toString())
        )

        console.log('Accounts:', add)
        console.log('Balance:', bal)
        setNetworkName(networkdata.name)
        setAddress(add)
        setUserBalance(bal)
        setUserData({ address: add, balance: bal, network: networkdata.name })
        // setMessage('Connect successfully');
      }
    } else {
      console.log('User logged out...!!!')
      // setMessage('disconnected')
      setUserData({ address: '', balance: 0, network: '' })
    }
  }

  return (
    <>
      <Head>
        <title>Home | Dabunny</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="description" content="Dabunny curated NFT art" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="NFT, art, blockchain, digital art, collection, token"
        />
        <meta property="og:title" content="Dabunny NFT" />
        <meta property="og:description" content="Dabunny curated NFT art" />
        <meta property="og:image" content="../public/img/bunny1.png" />
        <meta property="og:url" content="https://www.dabunnynft.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Dabunny NFT" />
        <meta name="twitter:image:alt" content="Dabunny NFT" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      {!loading ? (
        <LandingWrap>
          <NavBar {...userData} onConnectWallet={onConnectWallet} />
          <Hero
            connectStatus={''}
            saleStatus={''}
            {...userData}
            provider={provider}
            onMintToken={onMintToken}
            onConnectWallet={() => {}}
          />
          {/*  <MintBox {...userData} provider={provider} onMintToken={onMintToken}/>*/}
          {/* <div><h4>{message}</h4></div>  */}
          <WhatDa />
          {/* <BunniesCarousel /> */}
          <LandingPageCarousel />
          <Evolution />
          <Eggs />
          <Community />
          <Roadmap />
          <Faq />
          <Footer {...userData} />
        </LandingWrap>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
