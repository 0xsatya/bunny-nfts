import { NextPage } from 'next'
import { useState } from 'react'
import styled, { css } from "styled-components";

import { connectToDatabase } from '../util/mongodb'
import Table from '../src/components/Shared/Table'
import { getNFTAddress } from '../src/utils/web3lib';

export const CenterVH = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const nftaddress = getNFTAddress(); //"0x10fB46eA087C8eb3E1F9a636fa3Dc35674857906";

const dashboard: NextPage = ({ nfts, emails, emailsCsv, summary }: any) => {

  const onCSVSaveHandler = () => {
    const element = document.createElement("a");
    const file = new Blob([emailsCsv.emailsCsv], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "subscribersList.csv";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <div>
      <CenterVH>
        <h1>DaBunny Dashboard</h1>
      </CenterVH>
      <CenterVH>
        <h3>Details of all buyers ({nfts.length}) who bought Dabunny NFTs</h3>
      </CenterVH>
      <CenterVH>
        <h6> ************************ </h6>
      </CenterVH>

      <CenterVH>
        {
          nfts.length > 0 ?
          <Table data={nfts} type='tokens'/>
          :
          <div>No data to display</div>
        }
      </CenterVH>
      <CenterVH>
        <h6> ************************ </h6>
      </CenterVH>
      <CenterVH>
        <h3>Summary =&gt; Total Bunnies minted: {summary.total}, Normal: {summary.normal}, Rare: {summary.rare} </h3>
      </CenterVH>
      <CenterVH>
        <h3>Summary =&gt; Total collection: {summary.price} ETH</h3>
      </CenterVH>
     
      <CenterVH>
        <a href={'https://rinkeby.etherscan.io/token/'+nftaddress} target='_blank' rel='noreferrer'><h5>Dabunny Smart contract verifed address : {nftaddress}</h5></a>
      </CenterVH>
      <CenterVH>
      <h4>Email Subscribers</h4>
      </CenterVH>
      <CenterVH >
        <h5><a href='#' onClick={onCSVSaveHandler}>(click to download csv file)</a></h5>
      </CenterVH>
      <CenterVH>
        <ul>
          {
            emails.length == 0?
            <h4>No email subscribers found</h4> : ''
          }
          <Table data={emails} type='emails'/>
        </ul>
      </CenterVH>

     

      {/* <CenterVH>
        <p>{emailsCsv.emailsCsv.join(',')}</p>
      </CenterVH> */}
      {/* <ul>
          {nfts.map((nft: any, index: number) => (
            <li key={index}>
              <h2>{nft.buyerAddress}</h2>
              <h3>{nft.normalTokenIds}</h3>
              <h3>{nft.rareTokenIds}</h3>
              <h3>{nft.purchasedTimeStamp}</h3>
              <h3>{nft.emailId}</h3>
              <h3>{nft.subscribeStatus}</h3>
              <h3>{nft.totalPricePaid}</h3>
            </li>
          ))}
        </ul> */}
    </div>
  )
}

export default dashboard

export async function getServerSideProps() {
  const { db } = await connectToDatabase()
  let nfts = await db
    .collection('nfts')
    .find({})
    .sort({ metacritic: -1 })
    .toArray()
  console.log('nfts fetched:', nfts)

  let nftdata = nfts.map( (nft: any) => ({
    buyerAddress: nft.buyerAddress,
    normalTokenIds: nft.normalTokenIds? nft.normalTokenIds.join(','): '',
    rareTokenIds: nft.rareTokenIds ? nft.rareTokenIds.join(',') : '',
    totalPricePaid: nft.totalPricePaid? nft.totalPricePaid : 0,
    // emailId: nft.emailId ? nft.emailId : '',
    // subscribeStatus: nft.subscribeStatus ? "YES" : "NO",
    purchasedTimeStamp: nft.purchasedTimeStamp ? new Date(nft.purchasedTimeStamp).toLocaleDateString() + '  ' + new Date(nft.purchasedTimeStamp).toLocaleTimeString() : '',
  }))

  let total = 0, normal = 0, rare = 0, price = 0;
  nfts.forEach((nft : any) => {
    if(nft.normalTokenIds){
      normal += nft.normalTokenIds.length
    }
    if(nft.rareTokenIds){
      rare += nft.rareTokenIds.length; 
    }
    if(nft.totalPricePaid){
      price += nft.totalPricePaid;
    }
  });

  let emailSubscribers = await db.collection('emails').find({isValid : true})
            .sort({ metacritic: -1 })
            .toArray();
  let emailFiltered = emailSubscribers.map((email: any, index: number) => ( {emailId: email.emailId, userAddress: email.userAddress}));
  // console.log('Emails Subscribers:', emailFiltered);
  let emailList = emailSubscribers.map((email: any, index: number) => ( email.emailId));
  // console.log('csv list:', emailList);
  
  return {
    props: {
      nfts: JSON.parse(JSON.stringify(nftdata)),
      emails: JSON.parse(JSON.stringify(emailFiltered)),
      emailsCsv: JSON.parse(JSON.stringify({emailsCsv: emailList})),
      summary: {
        total: normal+rare,
        normal: normal,
        rare: rare,
        price: price
      }
    },
  }
}
