import React, { Component } from "react";
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BusinessIcon from '@material-ui/icons/Business';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade'
import {lay} from '../constants/Layout'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import EntypoTree from 'react-entypo-icons/lib/entypo/Tree'

function TopAnswer(props) {

 
  const classes = useStyles();

    return (

      <div
        className='top'
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          backgroundColor: "#efefef99",
          zIndex: 5,
          top: 80,
          height:  (props.isForMe && props.isForBusiness) ? 110 : 70,
          transition: '1s',
          flexDirection: 'column',
          justifyContent: 'flex-start'
          }}
      >
        <Typography style={{ margin: 4}} gutterBottom>{'Вы сэкономите в год:'}</Typography>
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'
          }}>
        {props.isForBusiness?
          <Fade top cascade>
          <div
            className='topStats'>
            <BusinessIcon style={{ color: '#000a' }}/>
            <DoubleArrowIcon style={{ color: '#000a' }}/>
            <EntypoTree style={{ color: 'green' }}/>
            <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>
              {(props.trees?Math.floor(props.trees):'') + '  деревьев'}
              </Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4 }} gutterBottom>{(props.sum?Math.floor(props.sum/1000):'') + ' тыс.  руб.'}</Typography>
          </div>
          </Fade>
          :
          <></>
        } 
        </div>    
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'}}>
        {props.isForMe?
        <Fade top cascade>
          <div
            className='topStats'>
            <EmojiPeopleIcon style={{ color: '#000a' }}/>
            <DoubleArrowIcon style={{ color: '#000a' }}/>
            <EntypoTree style={{ color: 'green' }}/>
            <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>{ '  деревьев'}</Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4 }} gutterBottom>{ ' тыс.  руб.'}</Typography>
          </div>
          </Fade>
          :
          <></>
        }     
        </div>
      </div>

    );
  
}

export default TopAnswer;


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width:200,
    marginLeft: 8,
    marginRight: 60
  },
}));