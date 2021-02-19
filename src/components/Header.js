import React, { Component } from "react";
import styled, { css } from "styled-components";
import axi from '../functions/axiosf';
import Logo from '../assets/logo'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      visibilityLogInBlackOut: 'hidden',
      txtColorHome: '#d4e4d4',
      txtColorStats: '#d4e4d4',
      txtColorNews: '#d4e4d4',
      txtColorLogIn: '#d4e4d4',

    }
  }

  componentDidMount() {
    //console.log(this.props)
  }
 

  render(){
    let w = this.state.open ? 0 : 180
  return (
    <div>
      <div className="burgerButton"
      onClick={()=>{
        this.setState({open: !this.state.open})
        this.props.menuOpenStatusToggle(w)
        }}
      >
        <div className="centerized" data-open={this.state.open+''}>
          <div className="bar1"> </div>
          <div className="bar2"> </div>
          <div className="bar3"> </div>
        </div>
      </div>
    <Container
      className= 'headerContainer'
      style={{
          position: "fixed",
          zIndex: 200,
          width: this.props.menuOpenStatus,
        }}>  
      <a
        className='HeadButton'
        target="_blank"
        href={"https://allgood.world/"}
        >   
        <Logo
          style={{
            width: 100,
            height: 'auto',
            margin: 16,
          }}
          theme = {"dark"}
        />
      </a> 
      <HeadButtonHome
        className='HeadButton'
        onMouseMove={() => { this.setState({ txtColorHome: '#ffcb17' }) }}
        onMouseLeave={() => { this.setState({ txtColorHome: '#d4e4d4' }) }}
          onClick={() => { this.props.route('Main')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColorHome }}>Калькулятор</MenuHomeTxt>
       
      </HeadButtonHome>
      <HeadButtonHome 
        className='HeadButton'
        onMouseMove ={() => { this.setState({ txtColorStats: '#ffcb17'})}} 
        onMouseLeave ={() => { this.setState({ txtColorStats: '#d4e4d4' }) }} 
          onClick={() => { this.props.route('Statistic')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColorStats}}> Ваши данные</MenuHomeTxt>
        
      </HeadButtonHome>

      <HeadButtonHome
        className='HeadButton'
        onMouseMove={() => { this.setState({ txtColorNews: '#ffcb17' }) }}
        onMouseLeave={() => { this.setState({ txtColorNews: '#d4e4d4' }) }}
          //onClick={() => { this.props.route('Print')}}
        >
          <a
              target="_blank"
              href={"https://treelator.tilda.ws/"}
             >
            <MenuHomeTxt style={{ color: this.state.txtColorNews }}>Статья</MenuHomeTxt>
          </a>
        
      </HeadButtonHome>
    </Container>
    </div>
  );
}
}
const Container = styled.div``;


const HeadButtonHome = styled.div``;

const MenuHomeTxt = styled.span`
  font-family: roboto-700;
  height: auto;
  flex: 1 1 0%;
  //color: #d4e4d4;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  transition: 1s;
`;


export default Header;
