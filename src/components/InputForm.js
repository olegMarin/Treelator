import React, { Component } from "react";
import styled, { css } from "styled-components";
import axi from '../functions/axiosf';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';


function InputForm(props) {

 
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <TextField
            className={classes.margin16}
            onChange={(e)=>props.handleSet(e.target.value)}
            value = {props.value}
            type="number"
            id="outlined-helperText"
            label={props.label}
            defaultValue={props.defaultValue}
            helperText={props.helperText}
            variant="outlined"
            autoFocus={props.autoFocus}
            focused={props.focused}
            InputProps={{
              endAdornment: <InputAdornment position="end">{props.value?props.endAdornment:""}</InputAdornment>,
            }}
          />
          
          <Slider 
            className={classes.margin16}
            style={{marginTop: 0}}
            valueLabelDisplay="auto" 
            aria-label="pretto slider" 
            value={props.sliderValue}
            onChange={(e, newValue)=>props.handleSet(newValue)}
            min={props.min}
            max={props.max}
            />
          <Divider 
            className={classes.margin16}
            style={{marginTop: 0}}/>
      </div>
    );
  
}

export default InputForm;

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

