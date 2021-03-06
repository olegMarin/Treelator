import React, { useState } from "react";
import  styled, { keyframes } from "styled-components";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Top from "../components/Top"
import TopAnswer from "../components/TopAnswer"
import BottomShare from "../components/BottomShare"
import InputForm from "../components/InputForm"
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

import moment from 'moment';
import 'moment/locale/ru';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';

import Logo from '../assets/logo'
import {lay} from '../constants/Layout'
import { Height } from "@material-ui/icons";

import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const coefA = 1.4
const coefC = 0.65

const priceMosscow2=17500
const priceCity=13000
const priceTown=7500
const priceMosscow1=27500
const pricePiter1=15500

const priceElectricity1 = 7.41
const priceElectricity2 = 6.57
const priceElectricity3 = 5.96

const priceWater1 = 42.3
const priceWater2 = 32.53
const priceWater3 = 30.45

const pricePublicTransport1 = 26940
const pricePublicTransport2 = 28800
const pricePublicTransport3 = 16200


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
    let mathWorker = (value === '' ? 0 : Math.floor(Number(value)/4.5))
    setPeopleOffice(mathWorker);
    funcCostNature(mathWorker)
  };

  const [peopleOffice, setPeopleOffice] = useState();
  const handleSetPeopleOffice = (value) => {
    let Worker = (value === '' ? '' : Number(value))
    setPeopleOffice(Worker);
    funcCostNature(Worker)
  };

  const funcCostNature = (mathWorker) => {
    //считаем расход света в килловатах
    setKvtCh(mathWorker*231)
    //считаем расход воды в кубаметрах
    setWater(mathWorker*0.51)
    setDrink(Math.floor(mathWorker*1.25*21))
    //расход пачек бумаги
    setPaper(Math.floor(mathWorker*6.1))
    //пересчитываем вкусняшки
    calcBiscuits(isCookies,isCoffee,isFruits)
  };

  const [mileage, setMileage] = useState();
  const handleSetMileage = (value) => {
    let vMileage = (value === '' ? '' : Number(value))
    setMileage(vMileage);
    //func(vМileage)
    saveResult()
  };


  const [fuelConsumption, setFuelConsumption] = useState();
  const handleSetFuelConsumption = (value) => {
    let vFuelConsumption = (value === '' ? '' : Number(value))
    setFuelConsumption(vFuelConsumption);
    //func(vМileage)
    saveResult()
  };

  const [isOnPublicTransport, setOnPublicTransport] = useState(Number(0));
  const [publicTransport, setPublicTransport] = useState(Number(0));
  const [isOnCar, setOnCar] = useState(Number(0));

  const [octane, setOctane] = useState(null);

  const [isCookies, setCookies] = useState(Number(0));
  const [isCoffee, setCoffee] = useState(Number(0));
  const [isFruits, setFruits] = useState(Number(0));

  const [rateBiscuits, setRateBiscuits] = useState(0);
  const calcBiscuits = (isCook, isCoff, isFruit) => {
  let perBiscuits = peopleOffice * (isCook * 3099 + isCoff * 3628 + isFruit * 7180);
    if (peopleOffice > 100) {
      perBiscuits = perBiscuits * 0.85;
    }; 
    if (peopleOffice > 500) {
      perBiscuits = perBiscuits * 0.75;
    };
    if (peopleOffice > 1000) {
      perBiscuits = perBiscuits * 0.65;
    };
    setRateBiscuits(perBiscuits)       
    saveResult()                        
  }

  const [isA, setA] = useState(0);
  const [isB, setB] = useState(0);
  const [isC, setC] = useState(0);

  const calcClass=(sClass) => {
     //let squareClass = isA*2+isB+isC*0.7
    if (isMosscow2) {
      setPriceOffice(Math.floor(sClass*priceMosscow2/12));
      setRateElectricity(priceElectricity1)
      setRateWater(priceWater1)
    };
    if (isPiter2||isCity) {
      setPriceOffice(Math.floor(sClass*priceCity/12));
      setRateElectricity(priceElectricity2)
      setRateWater(priceWater2)
    };
    if (isTown) {
      setPriceOffice(Math.floor(sClass*priceTown/12));
      setRateElectricity(priceElectricity3)
      setRateWater(priceWater3)
    };
    if (isMosscow1) {
      setPriceOffice(Math.floor(sClass*priceMosscow1/12));//центр москвы
      setRateElectricity(priceElectricity1)
      setRateWater(priceWater1)
    };
    if (isPiter1) {
      setPriceOffice(Math.floor(sClass*pricePiter1/12));//центр питера
      setRateElectricity(priceElectricity2)
      setRateWater(priceWater2)
    };
    
    saveResult()
  }

  const [rateElectricity, setRateElectricity] = useState(priceElectricity2);
  const [rateWater, setRateWater] = useState(priceWater2);

  const [isMosscow1, setMosscow1] = useState(0);
  const [isMosscow2, setMosscow2] = useState(0);
  const [isPiter1, setPiter1] = useState(0);
  const [isPiter2, setPiter2] = useState(0);
  const [isCity, setCity] = useState(0);
  const [isTown, setTown] = useState(0);

  const [regionCoefficient, setRegionCoefficient] = useState(0);

  const calcRegion=(Region) => {
     // Либо 1 (дорогой регион), либо 2 (средний регион), либо 3 (дешёвый)
     let squareClass = isA*coefA+isB+isC*coefC
    if (Region == 1) {
      setPriceOffice(Math.floor(squareClass*priceMosscow2/12));
      setRateElectricity(priceElectricity1)
      setRateWater(priceWater1)
      setPublicTransport(pricePublicTransport1)
    };
    if (Region == 2) {
      setPriceOffice(Math.floor(squareClass*priceCity/12));
      setRateElectricity(priceElectricity2)
      setRateWater(priceWater2)
      setPublicTransport(pricePublicTransport2)
    };
    if (Region == 3) {
      setPriceOffice(Math.floor(squareClass*priceTown/12));
      setRateElectricity(priceElectricity3)
      setRateWater(priceWater3)
      setPublicTransport(pricePublicTransport3)
    };
    if (Region == 4) {
      setPriceOffice(Math.floor(squareClass*priceMosscow1/12));//центр москвы
      setRateElectricity(priceElectricity1)
      setRateWater(priceWater1)
      setPublicTransport(pricePublicTransport1)
    };
    if (Region == 5) {
      setPriceOffice(Math.floor(squareClass*pricePiter1/12));//центр питера
      setRateElectricity(priceElectricity2)
      setRateWater(priceWater2)
      setPublicTransport(pricePublicTransport2)
    };
    
    saveResult()
  }


  const [priceOffice, setPriceOffice] = useState();
  const handleSetPriceOffice = (value) => {
    setPriceOffice(value === '' ? '' : Number(value));
    saveResult()
  };

  const [kvtCh, setKvtCh] = useState();
  const handleSetKvtCh = (value) => {
    setKvtCh(value === '' ? '' : Number(value));
    saveResult()
  };

  const [paper, setPaper] = useState();
  const handleSetPaper = (value) => {
    setPaper(value === '' ? '' : Number(value));
    saveResult()
  };

  const [water, setWater] = useState();
  const handleSetWater = (value) => {
    setWater(value === '' ? '' : Number(value));
    saveResult()
  };

  const [drink, setDrink] = useState();
  const handleSetDrink = (value) => {
    setDrink(value === '' ? '' : Number(value));
    saveResult()
  };

  const saveResult = (didMount) => {
  setTimeout(()=>{
    let newBase = {
      "isForMe":isForMe,
      "isForBusiness":isForBusiness,
      "sOffice":sOffice,
      "peopleOffice":peopleOffice,
      "mileage":mileage,
      "fuelConsumption": fuelConsumption,
      "isOnPublicTransport": isOnPublicTransport,
      "publicTransport": publicTransport,
      "octane":octane,
      "isCookies":isCookies,
      "isCoffee":isCoffee,
      "isFruits":isFruits,
      "rateBiscuits":rateBiscuits,
      "isA":isA,
      "isB":isB,
      "isC":isC,
      "rateElectricity":rateElectricity,
      "rateWater":rateWater,
      "isMosscow1":isMosscow1,
      "isMosscow2":isMosscow2,
      "isPiter1":isPiter1,
      "isPiter2":isPiter2,
      "isCity":isCity,
      "isTown":isTown,
      "priceOffice":priceOffice,
      "kvtCh":kvtCh,
      "paper":paper,
      "water":water,
      "drink":drink,
    }
  //let keysOfBaseStr = localStorage.getItem('keysOfBase')
  //let keysOfBase = JSON.parse(keysOfBaseStr)
  
    let baseStr = JSON.stringify(newBase)
    if (selected){
      localStorage.setItem(selected, baseStr);
    }
    else
    {
      if (didMount){
        localStorage.setItem('false', baseStr);
      }
      else{
        let name = moment().format('lll')
        setSelected(name)
        let newKeys = [name,...address]
        setAddress(newKeys)
        let keysStr = JSON.stringify(newKeys)
        localStorage.setItem('keysOfBase', keysStr);
        localStorage.setItem(name, baseStr);
      }
    }
  }, 1000)
  }
  const keysOfBaseStr = localStorage.getItem('keysOfBase')
  const keysOfBase = JSON.parse(keysOfBaseStr)
  const [selected, setSelected] = useState(false)
  const [address, setAddress] = useState(keysOfBase?keysOfBase:[])

  const onChangeBase=(f)=>{
    setSelected(f)
    let openedStr = localStorage.getItem(f);
    let opened = JSON.parse(openedStr)
    setForMe(opened.isForMe)
    setForBusiness(opened.isForBusiness)
    setSOffice(opened.sOffice)
    setPeopleOffice(opened.peopleOffice)
    setMileage(opened.mileage)
    setFuelConsumption(opened.fuelConsumption)
    setOnPublicTransport(opened.isOnPublicTransport)
    setPublicTransport(opened.publicTransport)
    setOctane(opened.octane)
    setCookies(opened.isCookies)
    setCoffee(opened.isCoffee)
    setFruits(opened.isFruits)
    setRateBiscuits(opened.rateBiscuits)
    setA(opened.isA)
    setB(opened.isB)
    setC(opened.isC)
    setRateElectricity(opened.rateElectricity)
    setRateWater(opened.rateWater)
    setMosscow1(opened.isMosscow1)
    setMosscow2(opened.isMosscow2)
    setPiter1(opened.isPiter1)
    setPiter1(opened.isPiter1)
    setCity(opened.isCity)
    setTown(opened.isTown)
    setPriceOffice(opened.priceOffice)
    setKvtCh(opened.kvtCh)
    setPaper(opened.paper)
    setWater(opened.water)
    setDrink(opened.drink)
  }

  saveResult(true)

  const classes = useStyles();
  return (
    <>
      <Top
        address={address}
        onChange={(f)=>{onChangeBase(f)}}
        selected={selected}
        toggleTheme={()=>props.toggleTheme()}
      />
      <TopAnswer
        trees={
          (kvtCh * 0.004 * 0.45* 12)+
          (water * 0.003 * 0.33 * 12)+
          ((drink * 0.003 * 0.33 * 12) + (drink / 19 * 0.02 * 12))+  
          (paper * 0.025 * 12)
          }
        sum={
          (sOffice*(priceOffice?priceOffice:0)*12)+
          (rateBiscuits)+
          (kvtCh*rateElectricity*12)+
          (water*rateWater*12)+
          (drink*9.3*12)+  
          (paper*165.2*12)
          }
        sumPersonal={
          (
            (isOnPublicTransport&&publicTransport)+
            (isOnCar&&(mileage*fuelConsumption/100*(+octane)* 2 * 21 * 12))
          )*(isForBusiness?peopleOffice:1)

        }
        treesPersonal={
          (
            (isOnPublicTransport&&(mileage* 1.084 / 130000 * 121.8 * 21 * 12 * 2 * 1.25 / 20))+
            (isOnCar&&(mileage* 1.085 / 130000 * 12.18 *fuelConsumption * 2 * 21 * 12))
          )*(isForBusiness?peopleOffice:1)
          }
          isForMe={isForMe}
          isForBusiness={isForBusiness}
      />

      <BottomShare
        height={(isForBusiness&&sOffice&&peopleOffice&&
          (isA||isB||isC)&&
          (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown))
          ?80:0}
        trees={
          (kvtCh * 0.004 * 0.45* 12)+
          (water * 0.003 * 0.33 * 12)+
          ((drink * 0.003 * 0.33 * 12) + (drink / 19 * 0.02 * 12))+  
          (paper * 0.025 * 12)
          }
        sum={
          (sOffice*(priceOffice?priceOffice:0)*12)+
          (rateBiscuits)+
          (kvtCh*rateElectricity*12)+
          (water*rateWater*12)+
          (drink*9.3*12)+  
          (paper*165.2*12)
          }
          isForMe={isForMe}
          isForBusiness={isForBusiness}
      />


      <Container
      //className={classes.root}
        style={{
          flexWrap: (lay.window.width>700) ? 'wrap':'nowrap',
          flexDirection: (lay.window.width>700) ? 'row':'column',
          alignItems: (lay.window.width>700) ? 'flex-start':'centre',
          justifyContent:'flex-start',
          paddingTop: (isForMe&&isForBusiness) ? 210 : 150,
          height: (isForMe&&isForBusiness) ? lay.window.height-210:lay.window.height-150,
          transition: '1s',
          
          backgroundColor: (props.theme=='light')?"#fff":"#000",
        }}
      >
      <div
        className="divColumn"
      >
        <Logo
        className={classes.margin16}
          style={{
            width: 150,
            height: 'auto'
          }}
          theme={props.theme}
        />
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
      </div>


      {(isForMe)?
      <Fade left cascade>
      <InputForm
            handleSet={(e)=>handleSetMileage(e)}
            value={mileage}
            label={"Какое до офиса расстояние?"}
            defaultValue={typeof mileage === 'number' ? mileage : ''}
            helperText=""
            autoFocus={true}
            focused={mileage}
            endAdornment={"километров"}
            sliderValue = {typeof mileage === 'number' ? mileage : 1}
            min={1}
            max={60}
          />
        </Fade>:<></>}

{(isForMe&&mileage)?
        //вид транспорта
        <Fade left cascade>
        <div className={classes.root}>
          <Typography  className={classes.margin16} gutterBottom>На чём добираетесь до работы?</Typography>
          <ButtonGroup 
            className={classes.margin16} 
            orientation="vertical"
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={isOnPublicTransport?"contained":"outlined"}
              onClick={()=>{
                  setOnPublicTransport(Number(!isOnPublicTransport))

                }}
              >общественный транспорт</Button>
            <Button
              className={classes.button}
              variant={isOnCar?"contained":"outlined"}
              onClick={()=>{
                  setOnCar(Number(!isOnCar))
                }}
            >автомобиль</Button>
          </ButtonGroup>

        {(isForMe&&mileage&&isOnCar)?
            //вид топлива
          <Fade bottom left cascade>
          <div className={classes.root}>
          <ButtonGroup 
            className={classes.margin16} 
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={(octane==="40")?"contained":"outlined"}
              onClick={()=>{
                  setOctane("40")
                }}
              >80</Button>
            <Button 
              className={classes.button}
              variant={(octane==="43")?"contained":"outlined"}
              onClick={()=>{
                  setOctane("43")
                }}
              >92</Button>
            <Button 
              className={classes.button}
              variant={(octane==="47")?"contained":"outlined"}
              onClick={()=>{
                  setOctane("47")
                }}
              >95</Button>
            <Button 
              className={classes.button}
              variant={(octane==="56")?"contained":"outlined"}
              onClick={()=>{
                  setOctane("56")
                }}
              >98</Button>
            <Button 
              className={classes.button}
              variant={(octane==="48")?"contained":"outlined"}
              onClick={()=>{
                  setOctane("48")
                }}
              >ДТ</Button>
          </ButtonGroup>
        </div>
      </Fade>:<></>}

          <Divider 
            className={classes.margin16}
            style={{marginTop: 0}}/>
          </div>
        </Fade>
        :<></>} 


      {(isForMe&&mileage&&isOnCar&&octane)?
      <Fade left cascade>
      <InputForm
            handleSet={(e)=>handleSetFuelConsumption(e)}
            value={fuelConsumption}
            label={"Какой расход топлива у машины?"}
            defaultValue={typeof fuelConsumption === 'number' ? fuelConsumption : ''}
            helperText=""
            autoFocus={true}
            focused={fuelConsumption}
            endAdornment={"литров на 100 километров"}
            sliderValue = {typeof fuelConsumption === 'number' ? fuelConsumption : 1}
            min={3}
            max={20}
          />
        </Fade>:<></>}



      {isForBusiness?
        <Zoom bottom cascade>
          <InputForm
            handleSet={(e)=>handleSetSOffice(e)}
            value={sOffice}
            label={"Какую площадь занимает ваш офис?"}
            defaultValue={typeof sOffice === 'number' ? sOffice : ''}
            helperText="занимательный факт: в башне Федерация Москва Сити можно арендовать офис стоимостью 158 тысяч рублей за м² в год — 11 м² на 33 этаже!"           
            autoFocus={true}
            focused={sOffice}
            endAdornment={"квадратных метров"}
            sliderValue = {typeof sOffice === 'number' ? sOffice : 10}
            min={10}
            max={2000}
          />
        </Zoom>
        :<></>}


      {(isForBusiness&&sOffice)?
      <Fade bottom cascade>
      <InputForm
            handleSet={(e)=>handleSetPeopleOffice(e)}
            value={peopleOffice}
            label={"Сколько людей там работает?"}
            defaultValue={typeof peopleOffice === 'number' ? peopleOffice : ''}
            helperText="занимательный факт: по нормам СанПиНа на одного работника должно приходиться не менее 4,5 м² офисного пространства, если сотрудник работает более 4 часов в день. "
            autoFocus={true}
            focused={peopleOffice}
            endAdornment={"человек"}
            sliderValue = {typeof peopleOffice === 'number' ? peopleOffice : 1}
            min={1}
            max={200}
          />
        </Fade>:<></>}


        
      {(isForBusiness&&sOffice&&peopleOffice)?
        //кофе печеньки
        <Rotate bottom right cascade>
        <div className={classes.root}>
          <Typography  className={classes.margin16} gutterBottom>Чем угощаете сотрудников в офисе?</Typography>
          <ButtonGroup 
            className={classes.margin16} 
            orientation="vertical"
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={isCookies?"contained":"outlined"}
              onClick={()=>{
                  setCookies(Number(!isCookies))
                  calcBiscuits(!isCookies,isCoffee,isFruits)
                }}
              >печеньками</Button>
            <Button
              className={classes.button}
              variant={isCoffee?"contained":"outlined"}
              onClick={()=>{
                  setCoffee(Number(!isCoffee))
                  calcBiscuits(isCookies,!isCoffee,isFruits)
                }}
            >кофейком</Button>
            <Button
              className={classes.button}
              variant={isFruits?"contained":"outlined"}
              onClick={()=>{
                  setFruits(Number(!isFruits))
                  calcBiscuits(isCookies,isCoffee,!isFruits)
                }}
            >фруктиками</Button>
          </ButtonGroup>
          <Divider 
            className={classes.margin16}
            style={{marginTop: 0}}/>
          </div>
        </Rotate>
        :<></>}
        {(isForBusiness&&sOffice&&peopleOffice)?
        //класс БЦ
      <Rotate bottom left cascade>
      <div className={classes.root}>
      <Typography className={classes.margin16} gutterBottom>Какого класса бизнесс центр, в котором располагается офис?</Typography>
          <ButtonGroup 
            className={classes.margin16} 
            size="large" color="primary" 
            aria-label="large primary button group">
            <Button 
              className={classes.button}
              variant={isA?"contained":"outlined"}
              onClick={()=>{
                  setA(1)
                  setB(0)
                  setC(0)
                  calcClass(coefA)
                }}
              >A</Button>
            <Button
              className={classes.button}
              variant={isB?"contained":"outlined"}
              onClick={()=>{
                  setA(0)
                  setB(1)
                  setC(0)
                  calcClass(1)
                }}
            >B</Button>
            <Button 
              className={classes.button}
              variant={isC?"contained":"outlined"}
              onClick={()=>{
                  setA(0)
                  setB(0)
                  setC(1)
                  calcClass(coefC)
              }}
              >C</Button>

          </ButtonGroup>
        </div>
      </Rotate>:<></>}
        {(isForBusiness&&sOffice&&peopleOffice&&
        (isA||isB||isC))||(isForMe&&isOnPublicTransport)?
        //какой город
      <Flip bottom cascade>
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
calcRegion(4)
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
                  calcRegion(1)
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
                  calcRegion(5)
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
                  calcRegion(2)
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
                  calcRegion(2)
                }}
            >в городе миллионнике</Button>
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
                  calcRegion(3)
                }}
            >в небольшом городе</Button>
          </ButtonGroup>
        </div>
      </Flip>:<></>}
      {(isForBusiness&&sOffice&&peopleOffice&&
      (isA||isB||isC)&&
      (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown))?
      //Какая арендная ставка?
        <Fade bottom cascade>
          <InputForm
            handleSet={(e)=>handleSetPriceOffice(e)}
            value={priceOffice}
            label={"Какая арендная ставка?"}
            defaultValue={typeof priceOffice === 'number' ? priceOffice : ''}
            helperText="Или выберете один из быстрых вариантов. "
            autoFocus={true}
            focused={priceOffice}
            endAdornment={"рублей за кв. м."}
            sliderValue = {typeof priceOffice === 'number' ? priceOffice : 200}
            min={200}
            max={2000}
          />
        </Fade>:<></>}
      {(isForBusiness&&sOffice&&peopleOffice&&
      (isA||isB||isC)&&
      (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown)&&
      priceOffice)?
      //Какое электропотребление в месяц?
      <Fade bottom cascade>
          <InputForm
            handleSet={(e)=>handleSetKvtCh(e)}
            value={kvtCh}
            label={"Какое электропотребление в месяц?"}
            defaultValue={typeof kvtCh === 'number' ? kvtCh : ''}
            helperText="уточните расходы электроэнергии. "
            autoFocus={false}
            focused={false}
            endAdornment={"квт/час в месяц"}
            sliderValue = {typeof kvtCh === 'number' ? kvtCh : 200}
            min={200}
            max={2000}
          />
        </Fade>:<></>}
              {(isForBusiness&&sOffice&&peopleOffice&&
      (isA||isB||isC)&&
      (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown)&&
      priceOffice&&kvtCh)?
      //Какой расход бумаги в месяц?
      <Fade bottom cascade>
          <InputForm
            handleSet={(e)=>handleSetPaper(e)}
            value={paper}
            label={"Какой расход бумаги в месяц?"}
            defaultValue={typeof paper === 'number' ? paper : ''}
            helperText="уточните количество пачек бумаги, расходуемых в месяц. "
            autoFocus={false}
            focused={false}
            endAdornment={"пачек в месяц"}
            sliderValue = {typeof paper === 'number' ? paper : 1}
            min={1}
            max={100}
          />
        </Fade>:<></>}
        {(isForBusiness&&sOffice&&peopleOffice&&
      (isA||isB||isC)&&
      (isMosscow1||isMosscow2||isPiter1||isPiter2||isCity||isTown)&&
      priceOffice&&kvtCh&&paper)?
      //Какой расход воды в месяц?
      <Fade bottom cascade>
        <InputForm
            handleSet={(e)=>handleSetWater(e)}
            value={water}
            label={"Какой расход воды в месяц?"}
            defaultValue={typeof water === 'number' ? water : ''}
            helperText="уточните количество кубометров воды, расходуемых в месяц. "
            autoFocus={false}
            focused={false}
            endAdornment={"кубометров в месяц"}
            sliderValue = {typeof water === 'number' ? water : 1}
            min={1}
            max={100}
          />

        </Fade>:<></>}
 
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
      transition: '1s',
      color: theme.palette.text.primary
  },
  button: {
   transition: '1s'
  }
  
}));

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  ${'' /* background-color: #E6E6E6; */}
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