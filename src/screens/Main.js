import React, { useState } from "react";
import  styled, { keyframes } from "styled-components";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Top from "../components/Top"
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';

import {lay} from '../constants/Layout'
import { Height } from "@material-ui/icons";

import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

function Main(props) {

  const [trees, setTrees] = useState(0);
  const handleSetTrees = (value) => {
    setTrees(value === '' ? '' : Number(value));
  };

  const [sum, setSum] = useState(0);
  const handleSetSum = (value) => {
    setSum(value === '' ? '' : Number(value));
  };

  const [isForMe, setForMe] = useState(0);
  const [isForBusiness, setForBusiness] = useState(0);

  const [sOffice, setSOffice] = useState();
  const handleSetSOffice = (value) => {
    setSOffice(value === '' ? '' : Number(value));
  };

  const [peopleOffice, setPeopleOffice] = useState();
  const handleSetPeopleOffice = (value) => {
    setPeopleOffice(value === '' ? '' : Number(value));
  };

  const [isCookies, setCookies] = useState(0);
  const [isCoffee, setCoffee] = useState(0);
  const [isFruits, setFruits] = useState(0);

  const [isA, setA] = useState(0);
  const [isB, setB] = useState(0);
  const [isC, setC] = useState(0);


  const [isMosscow1, setMosscow1] = useState(0);
  const [isMosscow2, setMosscow2] = useState(0);
  const [isPiter1, setPiter1] = useState(0);
  const [isPiter2, setPiter2] = useState(0);
  const [isCity, setCity] = useState(0);
  const [isTown, setTown] = useState(0);


  const [priceOffice, setPriceOffice] = useState();
  const handleSetPriceOffice = (value) => {
    setPriceOffice(value === '' ? '' : Number(value));
  };




  const classes = useStyles();
  return (
    <>
      <Top
        address={props.address}
        onChange={(f)=>{props.onChange(f)}}
        selected={props.selected}
      />
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
        <Typography style={{ margin: 4, marginRight: 16 }} gutterBottom>{trees + '  деревьев'}</Typography>
        <AccountBalanceWalletIcon style={{ color: 'green' }}/>
        <Typography style={{ margin: 4 }} gutterBottom>{sum + '  руб.'}</Typography>
      </div>
    
      <Container
      //className={classes.root}
        style={{
          flexWrap: (lay.window.width>700) ? 'wrap':'nowrap',
          flexDirection: (lay.window.width>700) ? 'row':'column',
          alignItems: (lay.window.width>700) ? 'flex-start':'centre',
          justifyContent:'flex-start',
          paddingTop: 120,
          height: lay.window.height-120,

        }}
      >

      <ButtonGroup className={classes.margin16} size="large" color="primary" aria-label="large primary button group">
        <Button 
          className={classes.button}
          variant={isForMe?"contained":"outlined"}
          onClick={()=>setForMe(!isForMe)}
          >для меня</Button>
        <Button
          className={classes.button}
          variant={isForBusiness?"contained":"outlined"}
          onClick={()=>setForBusiness(!isForBusiness)}
        >для компании</Button>
      </ButtonGroup>


      {isForBusiness?
      <Zoom bottom cascade>
      <div className={classes.root}>
        <TextField
            className={classes.margin16}
            onChange={(e)=>handleSetSOffice(e.target.value)}
            value = {sOffice}
            type="number"
            id="outlined-helperText"
            label="Какую площадь занимает ваш офис?"
            defaultValue={typeof sOffice === 'number' ? sOffice : ''}
            helperText="В башне Федерация Москва Сити можно арендовать офис стоимостью 158 тысяч рублей за м² в год — 11 м² на 33 этаже!"
            variant="outlined"
            autoFocus={true}
            focused={sOffice}
            InputProps={{
              endAdornment: <InputAdornment position="end">{sOffice?"квадратных метров":""}</InputAdornment>,
            }}
          />
          
          <Slider 
            className={classes.margin16}
            style={{marginTop: 0}}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={typeof sOffice === 'number' ? sOffice : 10}
            onChange={(e, newValue)=>handleSetSOffice(newValue)}
            min={10}
            max={2000}
            />
          <Divider 
            className={classes.margin16}
            style={{marginTop: 0}}/>
        </div>
        </Zoom>
        :<></>}


      {(isForBusiness&&sOffice)?
      <Fade bottom cascade>
      <div className={classes.root}>
        <TextField
            className={classes.margin16}
            onChange={(e)=>handleSetPeopleOffice(e.target.value)}
            value = {peopleOffice}
            type="number"
            id="outlined-helperText"
            label="Сколько людей там работает?"
            defaultValue={typeof peopleOffice === 'number' ? peopleOffice : ''}
            helperText="По нормам СанПиНа на одного работника должно приходиться не менее 4,5 м² офисного пространства, если сотрудник работает более 4 часов в день. "
            variant="outlined"
            focused={peopleOffice}
            InputProps={{
              endAdornment: <InputAdornment position="end">{peopleOffice?"человек":""}</InputAdornment>,
            }}
          />
          {/* <Typography gutterBottom></Typography> */}
          <Slider 
            className={classes.margin16}
            style={{marginTop: 0}}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={typeof peopleOffice === 'number' ? peopleOffice : 1}
            onChange={(e, newValue)=>handleSetPeopleOffice(newValue)}
            min={1}
            max={200}
            />
          <Divider 
              className={classes.margin16}
              style={{marginTop: 0}}
            />
        </div>
        </Fade>:<></>}
      {(isForBusiness&&sOffice&&peopleOffice)?
        <Rotate bottom right cascade>
        <div className={classes.root}>
          <Typography gutterBottom>Чем угощаете сотрудников в офисе?</Typography>
          <ButtonGroup 
            className={classes.margin16} 
            orientation="vertical"
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={isCookies?"contained":"outlined"}
              onClick={()=>setCookies(!isCookies)}
              >печеньками</Button>
            <Button
              className={classes.button}
              variant={isCoffee?"contained":"outlined"}
              onClick={()=>setCoffee(!isCoffee)}
            >кофейком</Button>
            <Button
              className={classes.button}
              variant={isFruits?"contained":"outlined"}
              onClick={()=>setFruits(!isFruits)}
            >фруктиками</Button>
          </ButtonGroup>
          <Divider 
            className={classes.margin16}
            style={{marginTop: 0}}/>
          </div>
        </Rotate>
        :<></>}
        {(isForBusiness&&sOffice&&peopleOffice)?
      <Rotate bottom left cascade>
      <div className={classes.root}>
          <ButtonGroup 
            className={classes.margin16} 
            orientation="vertical"
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={isMosscow1?"contained":"outlined"}
              onClick={()=>{
                  setMosscow1(1)
                  setMosscow2(0)
                  setPiter1(0)
                  setPiter2(0)
                  setCity(0)
                  setTown(0)

                }}
              >в центре Москвы</Button>
            <Button
              className={classes.button}
              variant={isMosscow2?"contained":"outlined"}
              onClick={()=>{
                  
                  setMosscow1(0)
                  setMosscow2(1)
                  setPiter1(0)
                  setPiter2(0)
                  setCity(0)
                  setTown(0)
                }}
            >на окраине Москвы</Button>
            <Button 
              className={classes.button}
              variant={isPiter1?"contained":"outlined"}
              onClick={()=>{
                
                  setMosscow1(0)
                  setMosscow2(0)
                  setPiter1(1)
                  setPiter2(0)
                  setCity(0)
                  setTown(0)
              }}
              >в центре Питера</Button>
            <Button 
              className={classes.button}
              variant={isPiter2?"contained":"outlined"}
              onClick={()=>{
                  
                  setMosscow1(0)
                  setMosscow2(0)
                  setPiter1(0)
                  setPiter2(1)
                  setCity(0)
                  setTown(0)
                }}
              >на окраине Питера</Button>
            <Button
              className={classes.button}
              variant={isCity?"contained":"outlined"}
              onClick={()=>{
                  
                  setMosscow1(0)
                  setMosscow2(0)
                  setPiter1(0)
                  setPiter2(0)
                  setCity(1)
                  setTown(0)
                }}
            >в героде миллионнике</Button>
            <Button
              className={classes.button}
              variant={isTown?"contained":"outlined"}
              onClick={()=>{
                  
                  setMosscow1(0)
                  setMosscow2(0)
                  setPiter1(0)
                  setPiter2(0)
                  setCity(0)
                  setTown(1)
                }}
            >в небольшом городе</Button>
          </ButtonGroup>
        </div>
      </Rotate>:<></>}
      {(isForBusiness&&sOffice&&peopleOffice&&
      (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown))?
      <Flip bottom cascade>
        <div className={classes.root}>
        <TextField
            className={classes.margin16}
            onChange={(e)=>handleSetPriceOffice(e.target.value)}
            value = {priceOffice}
            type="number"
            id="outlined-helperText"
            label="Какая арендная ставка?"
            defaultValue={typeof priceOffice === 'number' ? priceOffice : ''}
            helperText="Или выберете один из быстрых вариантов выше"
            variant="outlined"
            focused={priceOffice}
            InputProps={{
              endAdornment: <InputAdornment position="end">{priceOffice?"рублей за кв. м.":""}</InputAdornment>,
            }}
          />
          {/* <Typography gutterBottom></Typography> */}
          <Slider 
            className={classes.margin16}
            style={{marginTop: 0}}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={typeof priceOffice === 'number' ? priceOffice : 200}
            onChange={(e, newValue)=>handleSetPriceOffice(newValue)}
            min={200}
            max={2000}
            />
          <Divider 
              className={classes.margin16}
              style={{marginTop: 0}}
            />
        </div>
        </Flip>:<></>}
      
 
      <div
        className='top'
        style={{ 
          alignSelf: 'flex-start',
          height: "60vh",
          }}
      /> 
    </Container>
    </>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  transition: '1s'
  },
  margin16: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(1),
      width: 300,
      transition: '1s'
  },
  button: {
   transition: '1s'
  }
  
}));

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  background-color: #E6E6E6;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: '1s'
`;

export default Main;