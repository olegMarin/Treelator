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

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Fab from '@material-ui/core/Fab';

function Top(props) {

 
  const classes = useStyles();

    return (
      <div
        className='top'
        style={{ 
          position: "fixed",
          backgroundColor: "#efefef99",
          zIndex: 5,
          }}
      >
        <Fab color="primary" aria-label="add">
          <Brightness6Icon />
        </Fab>
        <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">сохранённые</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          //value={(props.selectedFridge.addres)?props.selectedFridge.addres:props.fridges[0]}
          value={props.selected}
          onChange={(e)=>{props.onChange(e.target.value)}}
          input={<BootstrapInput value={props.selected} />}
        >
          {props.address.map((item, index)=>{
            return(
              <MenuItem key={index} value={item} >{item}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
         {/*  <div style={{width: 80}}/> */}
      </div>
    );
  
}

export default Top;

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