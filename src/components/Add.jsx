import { Box, Button, TextField } from '@mui/material'
import React, {useState} from 'react'

const Add = ({person}) => {
  const [counter,setCounter ] =useState(0);
  const [form,setForm]=useState({
    "sname":person.sname,
    "admission":person.admission,
    "department":person.department,
    "semester":person.semester,
  })
  let showdata=()=>{
    console.log(form);
  }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }


// function Add() {
  return (
    <Box
component="form"
sx={{
  '& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate  
autoComplete="off"
>
  <br/>
<div>
  <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Name"
    name='sname'
    value={form.name}
    onChange={valueCap}
  />
  <br/>
   <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Admission"
    name='admission'
    value={form.admission}
    onChange={valueCap}
  />
  <br/>
   <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Department"
    name='department'
    value={form.department}
    onChange={valueCap}
  />
  <br/>
   <TextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Semester"
    name='semester'
    value={form.semester}
    onChange={valueCap}
  />
  <br/>
  <Button variant="contained" color="success">
  Success
</Button>
  
   </div>
   </Box>
  )
}


export default Add