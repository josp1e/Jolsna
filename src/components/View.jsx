
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
// const rows=[{"name":"joe","admission":"12","department":"chemistry","semester":"s4"},
//             {"name":"joel","admission":"34","department":"English","semester":"s4"},
//             {"name":"joey","admission":"22","department":"Computer Science","semester":"s4"}
//         ];
const View = () => {
  const[rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    })
  },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>firstName</TableCell>
          <TableCell align="right">lastName</TableCell>
          <TableCell align="right">gender</TableCell>
          <TableCell align="right">email</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.firstName}
            </TableCell>
            <TableCell align="right">{row.lastName}</TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View