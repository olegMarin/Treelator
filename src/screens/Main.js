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
import { RotateInUpLeft } from 'react-animations';



function Main(props) {
  const [isForMe, setForMe] = useState(1);
  const [isForBusiness, setForBusiness] = useState(0);

  const [sOffice, setSOffice] = useState();
  const handleSetSOffice = (value) => {
    setSOffice(value === '' ? '' : Number(value));
  };

  const classes = useStyles();
  return (
    <Container
    //className={classes.root}
    >
      <Top
        address={props.address}
        onChange={(f)=>{props.onChange(f)}}
        selected={props.selected}
      />
      
      <div
        className='top'
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

      <RotateInUpLeftDiv
        className={classes.margin16}
        style={!isForBusiness?{
          height: 0,
          overflow: "hidden"
          }:{}}
      >
        <TextField
            //className={classes.margin16}
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
          {/* <Typography gutterBottom></Typography> */}
          <Slider 
            //className={classes.margin16}
            style={{marginTop: 0}}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={typeof sOffice === 'number' ? sOffice : 10}
            onChange={(e, newValue)=>handleSetSOffice(newValue)}
            min={10}
            max={2000}
            />
          <div className={classes.margin} />
        </RotateInUpLeftDiv>


    </Container>
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
  
  },
  margin16: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(1),
      width: 300,
  },
  button: {
   transition: '1s'
  }
  
}));

const Container = styled.div`
  display: flex;
  background-color: #E6E6E6;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const RotateInUpLeftAnimation = keyframes`${RotateInUpLeft}`;
const RotateInUpLeftDiv = styled.div`
  animation: infinite 3s ${RotateInUpLeftAnimation};
`;
export default Main;