import React from 'react'
import  TextField from '@mui/material/TextField';
import './search.css'



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

export default Search