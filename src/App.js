import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";

import styled, { css } from "styled-components";
import "./icons.js";
import Main from "./screens/Main"
import Statistic from "./screens/Statistic";
import Print from "./screens/Print"
import Header from "./components/Header";
import "./style.css";
import axi from "./functions/axiosf";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'Main',
      route: this.route(),
      token: '',
      menuOpenStatus: 0,
      menuOpenStatusToggle: this.menuOpenStatusToggle(),
      base: [],
      address: [],
      sourceToPrint: [], 
      selected: {},
    }
  }

  componentDidMount(){
   
  }

  route=(u)=>{
    this.setState({screen: u})
  }

  menuOpenStatusToggle=(u)=>{
    this.setState({ menuOpenStatus: u })
  }

  addToken=(u, s)=>{
    this.setState({ token: u})
    this.axiUpdate(s)
  }


  render(){

    return (
      <Container>
        { this.state.screen == 'Statistic' && 
          <Statistic {...this.state} 
            update={(s) => { this.axiUpdate(s) }}
            onChangeFridge={(f)=>{this.setState({selectedFridge: f})}}
          /> }
        { this.state.screen == 'Main' && 
          <Main 
            {...this.state} 
            update={(s) => { this.axiUpdate(s) }}
          />}
        { this.state.screen == 'Print' && 
          <Print {...this.state} route={(u) => this.route(u)} />}
        {  this.state.screen != 'LogIn' && this.state.screen != 'Print' &&  
       
          <Header
            {...this.state} 
            route={(u) => this.route(u)}
            menuOpenStatusToggle={(u) => this.menuOpenStatusToggle(u)}
          ></Header>  
        }    
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  float:none;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`;
const HeaderComponentStack = styled.div`
  top: 0px;
  left: 0px;
  width: 160px;
  height: 0px;
  position: fixed;
  z-index: 250;
  overflow-y: visible;
`;
export default App;

      {/*
      <Route path="/" exact component={RootScreen} />
       <Route path="/NewGoods/" exact component={NewGoods} />
      <Route path="/NewMenuItem/" exact component={NewMenuItem} />
      <Route path="/Statistic/" exact component={Statistic} /> 
      */}    
  /*     
    if (this.state.screen == 'NewGoods'){
      return (
        <NewGoods
        props={this.state}>
        </NewGoods>
      );
    }
    if (this.state.screen == 'NewMenuItem') {
      return (
        <NewMenuItem
          props={this.state}>
        </NewMenuItem>
      );
    } 
    if (this.state.screen == 'Statistic') {
      return (
        <Statistic
          props={this.state}>
        </Statistic>
      );
    } 
  */