import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

import moment from 'moment';
function SavedStack(props) {
  return (
    <Container {...props}>
      <LoremIpsum> {props.sources.length+" шт."} </LoremIpsum>
      <DateTxt1>Весь товар от </DateTxt1>
      <DateTxt1>{moment(+props.timeCreate * 1000).format('lll')}</DateTxt1>
     {/* <DateTxt2>по 00:00 00.00.00</DateTxt2> */}
      <IoniconsIcon
        name="md-print"
        style={{
          color: "rgba(45,89,141,1)",
          fontSize: 74,
          marginTop: 3,
          marginLeft: 88
        }}
        onClick={()=>{}}
      ></IoniconsIcon>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgb(220 218 218);
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 2px 2px 8px 1px #0a190375;
  owerflow: hidden;
`;



const LoremIpsum = styled.span`
  font-family: Roboto-700;
  
  color: #121212;
  height: 30px;
  width: 139px;
  margin-top: 12px;
  margin-left: 9px;
`;

const DateTxt1 = styled.span`
  font-family: Roboto-500;
  font-size: 12px;
  color: #121212;
  ${'' /*  height: 12px;
 width: 130px; */}
  text-align: right;
  ${'' /* margin-top: 6px;
  margin-left: 19px; */}
  margin: 5px;
`;

const DateTxt2 = styled.span`
  font-family: Roboto-700;
  
  color: #121212;
  height: 16px;
  width: 138px;
  text-align: right;
  margin-top: 15px;
  margin-left: 11px;

`;

export default SavedStack;