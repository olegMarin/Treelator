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
          height: 40,
          }}
      >
        <LocalFloristIcon style={{ color: 'green' }}/>
        <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>{(props.trees?Math.floor(props.trees):'') + '  деревьев'}</Typography>
        <AccountBalanceWalletIcon style={{ color: 'green' }}/>
        <Typography style={{ margin: 4 }} gutterBottom>{(props.sum?Math.floor(props.sum/1000):'') + ' тыс.  руб.'}</Typography>
      </div>
    );
  
}

export default TopAnswer;

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width:200,
    marginLeft: 8,
    marginRight: 60
  },
}));