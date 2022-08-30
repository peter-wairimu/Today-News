import React from 'react'
import  TextField from '@mui/material/TextField';
import './search.css'
// import styled from 'styled-components';

const Search = () => {
  return (
    <div>
        <div className="search">
        <TextField
          className='input'
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          size='small'
          placeholder="Enter Search term"
        />
        
      </div>

    </div>
  )
}
// const TextField=styled.input`
// padding:10px 40px;
// border-radius:20px;
// border: none;
// background-color: var(--color-background);
// `
export default Search