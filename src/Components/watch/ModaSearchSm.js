import { Close, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

const ModaSearchSm = ({setModaSearchSm}) => {
  return (
    <div className=' col-12 p-3'>
    <div className='p-2 d-flex'>
  
    <div className='input-parent border p-1 input-rounded-circle col d-flex justify-content-center' >
    <span className='mx-1 d-flex' ><Search className='m-auto'/></span>
    <input type={'text'} className="border-0 col"  placeholder="بحث عن مقاطع فديو"/>
    </div>
    <IconButton onClick={()=> setModaSearchSm(false)}>
    <Avatar>
    <Close/>
    </Avatar>
  </IconButton>
    </div>
    </div>
  )
}

export default ModaSearchSm