import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Paper, Container, Typography } from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: '#D1D1D1',
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  header: {
    textAlign: 'center',
    fontSize: '1.7rem',
    fontWeight: 'bold',
    // letterSpacing: '1rem',
    // fontFamily: 'Roboto',
  },
  paper: {
    margin: '10px 200px 10px 200px',
  },
  paper__titleField: {
    textAlign: 'center',
    cursor: 'pointer',
    // margin: '10px 100px 10px 100px',
    background: '#EBECF0',
    display: 'flex',
    width: '100%',
    marginTop: '10px',
    // position: 'fixed',
  },
  paper__titleText: {
    // width: '100%',
  },
  paper__field: {
    textAlign: 'left',
    margin: '1px 0px 10px 0px',
    cursor: 'default',
  },
  paper__icon_delete: {
    // display: 'flex',
    marginLeft: 'auto',
    marginRight: '0',
  },
  task: {
    display: 'flex',
    marginLeft: '0',
    paddingTop: '10px',
    // marginRight: 'auto',
    width: '100%',
    verticalAlign: 'middle',
  },
  task__icon_delete: {
    marginLeft: 'auto',
    marginRight: '0',
  }
}));

export default function App() {
  const classes = useStyle();
  // const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(true);

  const handleChange = (event) => {
    setOpen(!open);
  };


  return (
    <div className={classes.root}>

      <CssBaseline />
      <Container component="main" className={classes.header}>
        <h1>TODOLIST</h1>
      </Container>

      <div className={classes.paper}>
        {open ? (
          <Container >
            <Paper onClick={handleChange} variant='elevation' className={classes.paper__titleField}>
              <Typography className={classes.paper__titleText}>September, 1</Typography>
              <DeleteIcon className={classes.paper__icon_delete} cursor='pointer' />
            </Paper>
            <div className={classes.paper__field}>
              <Paper className={classes.task} variant='outlined' square='false'>
                {/* <Checkbox
                checked={checked}
                onChange={handleChange}
                color='default'
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              /> */}
                Firstable
                <DeleteIcon className={classes.task__icon_delete} cursor='pointer' />
              </Paper>

            </div>
            <Paper variant='elevation' className={classes.paper__titleField}>
              <Typography className={classes.paper__titleText}>September, 2</Typography>
              <DeleteIcon className={classes.paper__icon_delete} cursor='pointer' />
            </Paper>
          </Container>
        ) : (
          <Container >
            <Paper onClick={handleChange} variant='elevation' className={classes.paper__titleField}>
              <Typography className={classes.paper__titleText}>September, 1</Typography>
              <DeleteIcon className={classes.paper__icon_delete} cursor='pointer' />
            </Paper>
            <Paper variant='elevation' className={classes.paper__titleField}>
              <Typography className={classes.paper__titleText}>September, 2</Typography>
              <DeleteIcon className={classes.paper__icon_delete} cursor='pointer' />
            </Paper>
          </Container>

        )}
      </div>

    </div>
  )
}
