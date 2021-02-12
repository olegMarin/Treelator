import React, { Component } from "react";
import styled, { css } from "styled-components";

function GoogFullStatus(props) {
  return (
    <Container {...props}>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-radius: 8px;
  margin-top: 8px;
  margin: 4px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(206,236,178,1);
  box-shadow: 2px 2px 8px 1px #0a190375;
`;

export default GoogFullStatus;
