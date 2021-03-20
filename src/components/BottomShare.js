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
import EntypoVkWithCircle  from 'react-entypo-icons/lib/entypo/VkWithCircle.js'
import EntypoInstagramWithCircle  from 'react-entypo-icons/lib/entypo/InstagramWithCircle.js'

import EntypoPaperPlane  from 'react-entypo-icons/lib/entypo/PaperPlane.js'

import EntypoFacebook from 'react-entypo-icons/lib/entypo/Facebook'
import EntypoTwitter  from 'react-entypo-icons/lib/entypo/Twitter.js'
import EntypoPinterest  from 'react-entypo-icons/lib/entypo/Pinterest.js'
import EntypoLinkedin  from 'react-entypo-icons/lib/entypo/Linkedin.js'
import EntypoVk  from 'react-entypo-icons/lib/entypo/Vk.js'
import EntypoInstagram  from 'react-entypo-icons/lib/entypo/Instagram.js'

import Rotate from 'react-reveal/Rotate';
import declOfNum from '../functions/declOfNum'

let shareIcon = {
    height: 26,
    width: 26,
    margin: 8,
    color: '#99CC33'
  }

function BottomShare(props) {

 
  const classes = useStyles();
  let floorTrees = props.trees?Math.floor(props.trees):''
  let declOfTrees = props.trees?declOfNum(floorTrees, ['дерево', 'дерева', 'деревьев']):''

  let floorSum = props.sum?Math.floor(props.sum):''
  let declOfSum = props.sum?declOfNum(floorSum, ['рубль', 'рубля', 'рублей']):''

  let text = props.pretext+' за год сэкономилю '+new Intl.NumberFormat('ru-RU').format(floorSum)+' '+ declOfSum +' и спасу '+new Intl.NumberFormat('ru-RU').format(floorTrees)+' '+declOfTrees+'. Узнай и ты'
    return (

      <div
        className={'bottom '+ classes.backgroundColor}
        style={{ 
          position: "fixed",
          //justifyContent: "space-around",
          zIndex: 5,
          bottom: 0,
          height:  props.height,
          transition: '1s',
          justifyContent: 'flex-start'
          }}
      >
        <Typography className={classes.color} style={{ margin: 4}} gutterBottom>{'Поделитесь в социальных сетях!'}</Typography>
        <div stile={{
          height:props.isForBusiness?40:0,
          overflow: 'hidden'
          }}>
        {props.height?
          <Rotate bottom cascade>
          <div
            className='topStats'>
              <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u=https://treelator.businessmod.ru/&title="+text}>
              <EntypoFacebook
                style={{
                  ...shareIcon
                }}
              />
              </a>
{/* 
               <a 
              target="_blank"
href={"http://vk.com/share.php?url=https://treelator.businessmod.ru/&title="+text+"&image=https://treelator.businessmod.ru/post.png&noparse=true"}
              >
              <EntypoInstagram
                              style={{
                                ...shareIcon,
                                marginTop: 10,
                              }}
                            />
              </a>
               */}
              <a 
              target="_blank"
              href={"https://www.linkedin.com/shareArticle?mini=true&url=https://treelator.businessmod.ru/&title=&summary="+text}>
              <EntypoLinkedin
                              style={{
                                ...shareIcon,
                                marginBottom: 12,
                              }}
                            />
              </a>
              <a target="_blank"
                href={"https://pinterest.com/pin/create/button/?url=https://treelator.businessmod.ru/&media=https://treelator.businessmod.ru/post.png&description='"+text+"'"}
                >
              <EntypoPinterest
                style={{
                  ...shareIcon
                }}
              />
              </a>              

              <a target="_blank" 
                href={"https://twitter.com/intent/tweet?url=https://treelator.businessmod.ru/&hashtags=экослед&text="+text}
                >
              <EntypoTwitter
                style={{
                  ...shareIcon
                }}
              />
              </a>

              
              <a 
              target="_blank"
href={"http://vk.com/share.php?url=https://treelator.businessmod.ru/&title="+text+"&image=https://treelator.businessmod.ru/post.png&noparse=true"}
              >
              <EntypoVk
                              style={{
                                ...shareIcon
                              }}
                            />
              </a>

             
              <a 
              target="_blank"
href={"http://telegram.me/share/url?url=https://treelator.businessmod.ru/&text="+text+"&image=https://treelator.businessmod.ru/post.png"}
              >
              <EntypoPaperPlane
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
//https://telegram.me/share/url?url=https%3A%2F%2Fzen.yandex&text=4%20способа%20поделиться%20ссылкой%20в%20Instagram

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width:200,
    marginLeft: 8,
    marginRight: 60
  },
  color: {
    color: theme.palette.text.primary+"a",
    transition: '1s'
  },
  backgroundColor: {
    backgroundColor: theme.palette.backgroundColorTransparent,
    transition: '1s'
  }
}));