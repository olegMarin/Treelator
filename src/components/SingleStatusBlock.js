import React, { Component } from "react";
import styled, { css } from "styled-components";

function SingleStatusBlock(props) {
  return (
    <Container {...props}>
      <LoremIpsum>Lorem Ipsum</LoremIpsum>
      <LoremIpsum3>Lorem Ipsum</LoremIpsum3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(204, 204, 204,1);
  border-radius: 8px;
  margin-top: 8px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 8px 1px #0a190375;
`;

const LoremIpsum = styled.span`
  font-family: Roboto-700;
  
  color: #121212;
  text-align: center;
  font-size: 18px;
  width: 160px;
  height: 22px;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto-300;
  
  color: #121212;
  height: 80px;
  width: 160px;
  font-size: 30px;
  text-align: center;
`;

export default SingleStatusBlock;
