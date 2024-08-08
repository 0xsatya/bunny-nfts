import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { NextPage } from 'next'

interface Props {
  onConnectWallet: any
  address: string
  balance: number
  network: string
}

// const Mydiv = styled.div`
//   /* position: absolute; */
//   width: 150px;
//   height: 40px;
//   left: 0px;
//   top: 0px;
//   background: #ffffff;
//   border: 2px solid #000000;
//   box-sizing: border-box;
//   border-radius: 39.5px;
//   padding: 0 13px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   cursor: pointer;
// `

const Mydiv = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 40px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 39.5px;
  cursor: pointer;
  text-overflow: ellipse;
  text-align: center;
  font-size: medium;
`

const Smallb = styled.div`
  font-size: small;
  display: block;
  height: 15px;
  font-weight: bold;
`
const Smalls = styled.div`
  font-size: x-small;
`

const ConnectButton: NextPage<Props> = (props) => {
  //{onConnectWallet, address, balance, network}
  const {onConnectWallet, address, balance, network} = props;
  
  const Mydiv = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: medium;
    width: 150px;
    height: 40px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 39.5px;
    /* padding: auto auto; */
    cursor: pointer;
    text-overflow: ellipse;
    text-align:center;
    align-items: center;
    
  `;

  const shortAddress = (address: string) => {
    return (
      address.substring(0, 10) +
      '...' +
      address.substring(address.length - 4, address.length)
    )
  }

  return (
    <Mydiv onClick={(e) => onConnectWallet(e)}>
      {address ? (
        <div>
          <Smallb>
            {balance
              ? Number(balance).toFixed(4) + ' ETH'
              : String(balance) === '0'
              ? '0 ETH'
              : ''}
          </Smallb>
          <Smalls>{address ? shortAddress(address) : 'Connect Wallet'}</Smalls>
        </div>
      ) : (
        <div> Connect Wallet </div>
      )}
    </Mydiv>
  )
}

export default ConnectButton
