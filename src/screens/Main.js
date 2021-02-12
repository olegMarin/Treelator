import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Top from "../components/Top"


function Main(props) {
  const [isForMe, setForMe] = useState(0);
  const [isForBusiness, setForBusiness] = useState(0);

  const classes = useStyles();
  return (
    <Container
    className={classes.root}
    >
      <Top
        address={props.address}
        onChange={(f)=>{props.onChange(f)}}
        selected={props.selected}
      />
      
      <div
        className='top'
      />
      <ButtonGroup className={classes.margin16} size="large" color="primary" aria-label="large outlined primary button group">
        <Button>для меня</Button>
        <Button>для компании</Button>
      </ButtonGroup>

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
  margin16: {
      margin: 16,
      marginBottom: 8,
    }
  },
  
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


export default Main;