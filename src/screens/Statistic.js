import React, { Component } from "react";
import styled, { css } from "styled-components";
import Top from "../components/Top"

class Statistic  extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        token: '',
      }
    }

    render(){



  return (
    <Rect>
      <Top
        address={this.props.address}
        onChange={(f)=>{this.props.onChange(f)}}
        selected={this.props.selected}
        toggleTheme={()=>this.props.toggleTheme()}
      />
      <List>
      <div
        className='top'
      />




      {/* <iframe src="https://treelator.businessmod.ru" 
  sandbox="allow-same-origin allow-scripts"
  width="360" height="600"
  >

</iframe> */}
      </List>
    </Rect>
  );}
}

const Rect = styled.div`
  display: flex;
  background-color: #E6E6E6;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const List = styled.div`
  display: flex;
  background-color: #999;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  height: calc (100vh - 80px);
  width: 100vw;
  overflow-y: scroll;
`;

const Center = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  pointer-events: none;

  ${props =>
    ((props.horizontal && !props.vertical) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      align-items: center;
  `};


  ${props =>
    ((props.vertical && !props.horizontal) ||
      (!props.horizontal && !props.vertical)) &&
    css`
      justify-content: center;
  `};
  `;

const Calendar = styled.div`
  background-color: #efefefd6;
  height: 260px;
  width: 260px;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export default Statistic;
