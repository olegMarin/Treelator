import React, { Component } from "react";
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import Typography from '@material-ui/core/Typography';
import {lay} from '../constants/Layout'


function TopAnswer(props) {

 
  const classes = useStyles();

    return (

      <div
        className='top'
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          backgroundColor: "#efefefd6",
          zIndex: 5,
          top: 80,
          height:  (props.isForMe && props.isForBusiness) ? 100 : 60,
          flexDirection: 'column'
          }}
      >
        <Typography style={{ margin: 4}} gutterBottom>{'Вы сэкономите в год:'}</Typography>
        {props.isForMe?
          <div
          style={{ 
            justifyContent: "space-around",
            height: 40,
            flexDirection: 'row',
            }}>
            <Typography style={{ margin: 4}} gutterBottom>{'компания:'}</Typography>
            <LocalFloristIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>{(props.trees?Math.floor(props.trees):'') + '  деревьев'}</Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4 }} gutterBottom>{(props.sum?Math.floor(props.sum/1000):'') + ' тыс.  руб.'}</Typography>
          </div>
          :
          <></>
        }        
        {props.isForBusiness?
          <div
          style={{ 
            justifyContent: "space-around",
            height: 40,
            flexDirection: 'row',
            }}>
            <Typography style={{ margin: 4}} gutterBottom>{'сотрудник:'}</Typography>
            <LocalFloristIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>{ '  деревьев'}</Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography style={{ margin: 4 }} gutterBottom>{ ' тыс.  руб.'}</Typography>
          </div>
          :
          <></>
        }      
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