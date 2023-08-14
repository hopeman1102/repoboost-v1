import React from "react";
import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./components/Orders";
import Typography from "@mui/material/Typography";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const dashboard = () => { 
  const [type, setType] = useState('10');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [midName, setMidName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [ssn, setSSN] = React.useState('');
  const [dob, setDOB] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');

  const handleSubmit = () => {

  }

  return (
    <div>
      <Typography variant="h3" component="h3">
        Search
      </Typography>
      <br/>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Chart */}
          <Grid item xs={12} md={3} lg={2}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Search Items</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Search Items"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Person Search</MenuItem>
                  <MenuItem value={20}>Phone Search</MenuItem>
                  <MenuItem value={30}>Vehicle Search</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <TextField
              id="outlined-controlled"
              label="First Name"
              value={firstName}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Last Name"
              value={lastName}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Middle Name"
              value={midName}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setMidName(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Address"
              value={address}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="SSN"
              value={ssn}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setSSN(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="DOB"
              value={dob}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setDOB(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Phone"
              value={phone}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Email"
              value={email}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="City"
              value={city}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="State"
              value={state}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setState(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Zip Code"
              value={zip}
              margin="dense"
              style={{marginRight: 20}}
              onChange={(event) => {
                setZip(event.target.value);
              }}
            />
            
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Box sx={{ minWidth: 120 }}>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Box>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default dashboard;
