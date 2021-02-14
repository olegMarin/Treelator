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
import EntypoFacebookWithCircle from 'react-entypo-icons/lib/entypo/FacebookWithCircle'

function BottomShare(props) {

 
  const classes = useStyles();
let text = 'Если переводу свою компанию на удалёнку, смогу сэкономить '+props.sum+' рублей и спасти '+props.trees+' деревьев. Узнай и ты: ссылка'
    return (

      <div
        className='bottom'
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          backgroundColor: "#efefefd6",
          zIndex: 5,
          bottom: 0,
          height:  props.height,
          transition: '1s',
          justifyContent: 'flex-start'
          }}
      >
        <Typography style={{ margin: 4}} gutterBottom>{'Поделитесь результатом в социальных сетях!'}</Typography>
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'
          }}>
        {props.isForBusiness?
          <Fade top cascade>
          <div
            className='topStats'>
<a target='_blank' href="https://www.facebook.com/sharer/sharer.php?u=https://treelator.businessmod.ru/">
<EntypoFacebookWithCircle/>
</a>


          </div>
          </Fade>
          :
          <></>
        } 
        </div>    
      </div>

    );
  
}

export default BottomShare;


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width:200,
    marginLeft: 8,
    marginRight: 60
  },
}));