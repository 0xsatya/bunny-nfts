import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { connectToDatabase } from "../util/mongodb";
import Table from '../src/components/Shared/Table'
// import { Center } from '../src/components/Shared/Center'
import styled, { css } from "styled-components";


export const CenterVH = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Testapi: NextPage = ({nfts}: any) => {
    const [normalTokenIds, setNormalTokenIds] = useState();
    const [rareTokenIds, setRareTokenIds] = useState();
    const [acctAddress, setAcctAddress] = useState('');
    const [emailId, setEmailId] = useState('');
    const [totalPrice, setTotalPrice] = useState();
    const [message, setMessage] = useState('');
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    // const [nfts, setNfts] = useState([]);
    const [updateTimeStatmp, setUpdateTimeStatmp] = useState('');

    const refreshData = () => {
        router.replace(router.asPath);
    }

    let assetData = {
        buyerAddress: '',
        normalTokenIds: [],
        rareTokenIds: [],
        totalPricePaid: 0,
        emailId: '',
        subscribeStatus: false,
        purchasedTimeStamp: 0,
    }
    let emailData = {
        buyerAddress: '',
        emailId: '',
        subscribeStatus: false,
    }

    const getAssets = async () => {
        try {
            let data = await fetch('/api/assets', {
                method: 'GET',
            });
            return await data.json();
        } catch (error) {
            console.log('ERROR: in asset/GET api:', error);
        }
    }

    // useEffect(() => {
    //     const init = async () => {
    //         let assets = await getAssets();
    //         console.log('Assets:', assets);
            
    //         setNfts(assets.message);
    //     };
    //     init();
    // }, [updateTimeStatmp])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let ntokenIds = e.target.normalTokenIds.value;
        let rtokenIds = e.target.rareTokenIds.value;
        let acct = e.target.acctAddress.value;
        let email = e.target.emailId.value;
        let price = e.target.totalPrice.value;

        if(ntokenIds) 
            assetData.normalTokenIds = ntokenIds.split(',');
        if(rtokenIds)
            assetData.rareTokenIds = rtokenIds.split(',');
        assetData.buyerAddress = acct;
        assetData.emailId = email;
        assetData.totalPricePaid = Number(price);
        assetData.purchasedTimeStamp = Number(new Date());

        console.log('all data to update:', ntokenIds, rtokenIds, acct, email, price);
        setMessage('all data to update:'+ ntokenIds +';'+ rtokenIds +';' + acct + ';' + email + ';' + price);

        let response = await fetch('/api/assets', {
            method: 'POST',
            body: JSON.stringify(assetData),
        });

        // get the data
        let data = await response.json();

        console.log('Api Get Data: ', data);
        setMessage(data.message[0].image);
        
        let response1 = await fetch('/api/assets', {
            method: 'GET'
        });
        console.log('all assets:', await response1.json());
        refreshData();

        if (data.success) {
            // reset the fields
            setAcctAddress('');
            // setContent('');
            // set the message
            // return setMessage(data.message);
        } else {
            // set the error
            // return setMessage(data.message);
        }
    }

    const handleSubmitSubscribe = async (e: any) => {
        e.preventDefault();
        let acct = e.target.acctAddress.value;
        let email = e.target.emailId.value;

        emailData.buyerAddress = acct.trim();
        emailData.emailId = email.trim();
        emailData.subscribeStatus = true;

        let response = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(emailData),
        });

        // get the data
        let data = await response.json();

        console.log('Email subscribe result: ', data);
        
        let response1 = await fetch('/api/email', {
            method: 'GET'
        });
        console.log('all email subscribers:', await response1.json());
        
        // setUpdateTimeStatmp(new Date());
        refreshData();

        if (data.success) {
            setAcctAddress('');
        } else {
        }
    
    }
    const handleSubmitDeSubscribe = async (e: any) => {
        e.preventDefault();
        let acct = e.target.acctAddress.value;
        let emailData = { buyerAddress: '', subscribeStatus: false};

        emailData.buyerAddress = acct.trim();
        emailData.subscribeStatus = false;

        let response = await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(emailData),
        });

        // get the data
        let data = await response.json();

        console.log('Email De subscribe result: ', data);
        
        let response1 = await fetch('/api/email', {
            method: 'GET'
        });
        console.log('all email subscribers:', await response1.json());
        refreshData();

        if (data.success) {
            setAcctAddress('');
        } else {
        }
    
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="account-label">Normal Token Ids: </label>
                <input type="text" name="normalTokenIds" defaultValue="1,2"/>
                <br/>
                <label className="account-label">Rare Token Ids: </label>
                <input type="text" name="rareTokenIds" defaultValue="10,11"/>
                <br/>
                <label className="account-label">Acct Address: </label>
                <input type="text" name="acctAddress" defaultValue="xxx" />
                <br/>
                <label className="account-label">EmailId: </label>
                <input type="text" name="emailId" defaultValue="test@dabunny.com" />
                <br/>
                <label className="account-label">TotalPrice : </label>
                <input type="text" name="totalPrice" defaultValue="2.5" /> <br/>
                <button type="submit"> Update Nfts </button>
            </form>

            <form onSubmit={handleSubmitSubscribe}>
            <br/>
                <label className="account-label">Acct Address: </label>
                <input type="text" name="acctAddress" defaultValue="xxx" />
                <br/>
                <label className="account-label">EmailId: </label>
                <input type="text" name="emailId" defaultValue="test@dabunny.com" />
                <br/>    
                <button type="submit"> Subscribe EMail </button>
            </form>

            <form onSubmit={handleSubmitDeSubscribe}>
            <br/>
                <label className="account-label">Acct Address: </label>
                <input type="text" name="acctAddress" defaultValue="xxx" />
                <br/>
                <button type="submit"> Desubscribe EMail </button>
                <br/>
                <br/>
                <br/>
            </form>

            <div>{message}</div>
            <div>

            <CenterVH>
                <Table data={nfts} />
            </CenterVH>

                {/* <table>
                    <thead>
                        <tr>
                            <th> Buyer                  </th>
                            <th> | Normal tokens          </th>
                            <th> | Rare tokens            </th>
                            <th> | total Price            </th>
                            <th> | Buyer Subscription Email Id         </th>
                            <th> | Subscribed             </th>
                            <th> | purchasedTimeStamp     </th>
                        </tr>
                    </thead>
                    <tbody>
                    {nfts? nfts.map((nft: any, index: number) => (
                        <tr key={index}>
                            <td>{nft.buyerAddress.substring(0,8)+'...'}</td>
                            <td> | {(nft.normalTokenIds).join(',')}</td>
                            <td> | {(nft.rareTokenIds).join(',')}</td>
                            <td> | {nft.totalPrice}</td>
                            <td> | {nft.emailId}</td>
                            <td> | {nft.subscribeStatus ? 'YES' : 'NO'}</td>
                            <td> | {nft.purchasedTimeStamp}</td>
                        </tr>
                    )) : '' }
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default Testapi

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    let nfts = await db
            .collection('nfts')
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
    console.log('nfts fetched:', nfts);
    let nftdata = nfts.map( (nft: any) => ({
        buyerAddress: nft.buyerAddress,
        normalTokenIds: nft.normalTokenIds? nft.normalTokenIds.join(','): '',
        rareTokenIds: nft.rareTokenIds ? nft.rareTokenIds.join(',') : '',
        totalPricePaid: nft.totalPricePaid? nft.totalPricePaid : 0,
        emailId: nft.emailId ? nft.emailId : '',
        subscribeStatus: nft.subscribeStatus ? "YES" : "NO",
        purchasedTimeStamp: nft.purchasedTimeStamp ? new Date(nft.purchasedTimeStamp).toLocaleDateString() + '  ' + new Date(nft.purchasedTimeStamp).toLocaleTimeString() : '',
      }))
    
      return {
        props: {
          nfts: JSON.parse(JSON.stringify(nftdata)),
        },
      }
  }
  