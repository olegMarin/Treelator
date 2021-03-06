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
import declOfNum from '../functions/declOfNum'
import NumberFormat from 'react-number-format';

function TopAnswer(props) {

 
  const classes = useStyles();
  let floorTrees = props.trees?Math.floor(props.trees):''
  let declOfTrees = props.trees?declOfNum(floorTrees, ['дерево', 'дерева', 'деревьев']):''

  let floorTreesPersonal = props.treesPersonal?Math.floor(props.treesPersonal):''
  let declOfTreesPersonal = props.treesPersonal?declOfNum(floorTreesPersonal, ['дерево', 'дерева', 'деревьев']):''
    return (

      <div
        className={'top '+ classes.backgroundColor}
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          //backgroundColor: "#efefef99",
          zIndex: 5,
          top: 80,
          height:  (props.isForMe && props.isForBusiness) ? 110 : 70,
          transition: '1s',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          }}
      >
        <Typography className={classes.color} style={{ margin: 4}} gutterBottom>{'Вы сэкономите в год:'}</Typography>
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'
          }}>
        {props.isForBusiness?
          <Fade top cascade>
          <div
            className='topStats'>
            <BusinessIcon className={classes.color}/>
            <DoubleArrowIcon className={classes.color}/>
            <EntypoTree style={{ color: 'green' }}/>
            <Typography className={classes.color} style={{ margin: 4, marginRight: 16 }} gutterBottom>
              { floorTrees + ' ' + declOfTrees }
              </Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography className={classes.color} style={{ margin: 4 }} gutterBottom>
              {new Intl.NumberFormat('ru-RU').format(props.sum?Math.floor(props.sum/1000):'')+' тыс.  руб.'}
            </Typography>
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
            <EmojiPeopleIcon className={classes.color}/>
            <DoubleArrowIcon className={classes.color }/>
            <EntypoTree style={{ color: 'green' }}/>
            <Typography className={classes.color} style={{ margin: 4, marginRight: 16 }} gutterBottom>
              { floorTreesPersonal + ' ' + declOfTreesPersonal }
            </Typography>
            <AccountBalanceWalletIcon style={{ color: 'green' }}/>
            <Typography className={classes.color} style={{ margin: 4 }} gutterBottom>
              { new Intl.NumberFormat('ru-RU').format(props.sumPersonal?Math.floor(props.sumPersonal/1000):'')+' тыс.  руб.'}
            </Typography>
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
    marginRight: 60,
    color: theme.palette.text.primary
  },  
  color: {
    color: theme.palette.text.primary+"d",
    transition: '1s'
  },
  backgroundColor: {
    backgroundColor: theme.palette.backgroundColorTransparent,
    transition: '1s'
  }
}));