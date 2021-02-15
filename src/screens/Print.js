import React, { Component } from "react";
import styled, { css } from "styled-components";
import {themes} from "../constants/Colors"
import moment from 'moment';
import 'moment/locale/ru';
import {lay} from '../constants/Layout'

class Print extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <iframe src="https://treelator.tilda.ws/" 
        width={lay.window.width} height={lay.window.height} align="left">
          Ваш браузер не поддерживает плавающие фреймы!
      </iframe>
    );
  }
}

const PrintForm = styled.div`
 
  float:none;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  cursor: alias;
  
  ${'' /* flex-direction: column;
  justify-content: flex-start;
  align-item: center; */}
`;

export default Print;