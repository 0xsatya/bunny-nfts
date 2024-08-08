import React from "react";
import styled from "styled-components";
import { getNFTAddress } from '../../../utils/web3lib';

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  /* border-collapse: separate;
  border-spacing: 2px 10px; */

  caption-side: bottom;
  /* empty-cell: show | hide;  */
  /* empty-cell is a property of table or the cells themselves */

  /* vertical-align: baseline | sub | super | text-top | 
                text-bottom | middle | top | bottom | 
                <percentage> | <length> */

  /* tbody {
    vertical-align: top;
  }              */
  /* td,
  th {
    border: none;
  } */
  td,
  th {
    border: 1px solid;
    padding: 2px 5px;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;
const DataTable =  ({ data, type }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} type={type}/>
);
export default DataTable;

const TableMarkup = ({ titles, data, type }) => (
  <StyledTable>
    <caption>Data of DaBunny NFTs</caption>
    <colgroup>
      <col />
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th>SNo</th>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {
        type === "tokens" ?
        data.map((item, index) => (
        <tr key={index}>
          <td>{index+1}</td>

          <td ><a href={'https://rinkeby.etherscan.io/address/' + item[titles[0]]} target='_blank' rel='noreferrer'>{item[titles[0]]}</a></td> 
          <td ><a href={'https://rinkeby.etherscan.io/token/'+getNFTAddress()} target='_blank' rel='noreferrer'>{item[titles[1]]}</a></td> 
          <td ><a href={'https://rinkeby.etherscan.io/token/'+getNFTAddress()} target='_blank' rel='noreferrer'>{item[titles[2]]}</a></td> 
          <td >{item[titles[3]] + ' EHT'}</td> 
          <td >{item[titles[4]]}</td> 

        </tr>
      ))
      :
      data.map((item, index) => (
        <tr key={index}>
          <td>{index+1}</td>

          <td >{item[titles[0]]}</td> 
          <td >{item[titles[1]]}</td> 
        </tr>
      ))
    }
    </tbody>
    {/* <tfoot>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </tfoot> */}
  </StyledTable>
);
