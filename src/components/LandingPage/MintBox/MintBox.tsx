import React, { ReactElement, useState } from 'react'
import styled from 'styled-components';

interface Props {
    provider: any;
    onMintToken: any;
    address: string;
    balance: number;
    network: string;
}

const Mydiv = styled.div`
    /* position: absolute; */
    width: 150px;
    height: 40px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 39.5px;
    padding: 5px 13px;
    cursor: pointer;
`;

export default function MintBox({provider, address, balance, network, onMintToken}: Props): ReactElement {
    const [tokenCount, setTokenCount] = useState(1);
    const [isPresell, setIsPresell] = useState(false);

    return (
        <div>
            <h4>---------------</h4>
            <h4>My Mint Box</h4>
            <div>{ balance ? Number(balance).toFixed(4) + 'ETH': '' }</div>
            <div>{ address ? address : "No address found"}</div>
            <Mydiv onClick={(e) => onMintToken(e, tokenCount, isPresell)}>
                Mint Token
            </Mydiv>
        </div>
    )
}
