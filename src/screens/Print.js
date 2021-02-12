import React, { Component } from "react";
import styled, { css } from "styled-components";
import {themes} from "../constants/Colors"
import moment from 'moment';
import 'moment/locale/ru';

class Print extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '123456789',
    }
  }

  render(){
    let baseTree = {}
    this.props.base.productBase.map((item, index) => {
      baseTree[item.idp] = item
    })
    return (
      <PrintForm
        onClick={() => { this.props.route('NewGoods') }}
      >
        {this.props.sourceToPrint.map((item, index)=>{
          return(
              <div
                key={index}
                style={{ pageBreakAfter: "always", width: 116,}}
                >
                
              </div>        
            )}
        )}
      </PrintForm>
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