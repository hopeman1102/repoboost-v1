import React from "react";
import { useState } from "react";
import { server } from "../config";

// mui imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function createData(name, email, token) {
  return { name, email, token };
}

const rows = [
  createData("Frozen yoghurt", "1231@bsingh.com", "0x28fwefhoh932lffse"),
  createData("Ice cream sandwich", "1231@bsingh.com", "0x28fwefhoh932lffse"),
  createData("Eclair", "1231@bsingh.com", "0x28fwefhoh932lffse"),
  createData("Cupcake", "1231@bsingh.com", "0x28fwefhoh932lffse"),
  createData("Gingerbread", "1231@bsingh.com", "0x28fwefhoh932lffse"),
];

export default function devices({ data }) {

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (event, email) => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const handleAddCustomer = () => {

  }

  return (
    <div>
      <Typography variant="h3" component="h3">
        Customers
      </Typography>
      <br/>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth={'md'}>
        <DialogTitle>Add Customer</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Name" style={{width: 400, marginRight: 20}}/>
          <TextField margin="dense" label="Email ID" style={{width: 400, marginRight: 20}}/>
          <TextField type="password" margin="dense" label="Password" style={{width: 400, marginRight: 20}}/>
          <TextField type="password" margin="dense" label="Confirm Password" style={{width: 400, marginRight: 20}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddCustomer} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Box>
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Customers"
                  inputProps={{ 'aria-label': 'search customers' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
            <Button onClick={handleOpenDialog} variant="contained">Add Customer</Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email ID</TableCell>
                  <TableCell align="right">Token</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.token}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/test`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };
