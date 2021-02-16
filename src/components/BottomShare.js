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
import EntypoTwitterWithCircle  from 'react-entypo-icons/lib/entypo/TwitterWithCircle.js'
import EntypoPinterestWithCircle  from 'react-entypo-icons/lib/entypo/PinterestWithCircle.js'
import EntypoLinkedinWithCircle  from 'react-entypo-icons/lib/entypo/LinkedinWithCircle.js'
import Rotate from 'react-reveal/Rotate';

let shareIcon = {
    height: 40,
    width: 40,
    margin: 4,
    color: '#99CC33'
  }

function BottomShare(props) {

 
  const classes = useStyles();
let text = 'Если переводу свою компанию на удалёнку, смогу сэкономить '+props.sum+' рублей и спасти '+props.trees+' деревьев. Узнай и ты: ссылка'
    return (

      <div
        className='bottom'
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          backgroundColor: "#efefef99",
          zIndex: 5,
          bottom: 0,
          height:  props.height,
          transition: '1s',
          justifyContent: 'flex-start'
          }}
      >
        <Typography style={{ margin: 4}} gutterBottom>{'Поделитесь в социальных сетях!'}</Typography>
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'
          }}>
        {props.isForBusiness?
          <Rotate bottom cascade>
          <div
            className='topStats'>
              <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://treelator.businessmod.ru/">
              <EntypoFacebookWithCircle
                style={{
                  ...shareIcon
                }}
              />
              </a>
              <a target="_blank" href={"https://twitter.com/intent/tweet?url=https://treelator.businessmod.ru/&text="+text}>
              <EntypoTwitterWithCircle
                style={{
                  ...shareIcon
                }}
              />
              </a>
              <a target="_blank"
                href={"https://pinterest.com/pin/create/button/?url=https://treelator.businessmod.ru/&media=https://treelator.businessmod.ru/post.png&description="+text}>
              <EntypoPinterestWithCircle
                style={{
                  ...shareIcon
                }}
              />
              </a>
              <a 
              target="_blank"
              href={"https://www.linkedin.com/shareArticle?mini=true&url=https://treelator.businessmod.ru/&title=&summary="+text}>
              <EntypoLinkedinWithCircle
                              style={{
                                ...shareIcon
                              }}
                            />
              </a>
          </div>
          </Rotate>
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