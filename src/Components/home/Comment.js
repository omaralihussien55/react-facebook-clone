import { Avatar, Badge } from '@mui/material'
import React from 'react'
import { imgperson } from '../../data/data'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GifBoxIcon from '@mui/icons-material/GifBox';
const Comment = () => {
  return (
    <div className='mb-3 col-11 mx-auto '>
    <div className='d-flex '>
         <div className='mx-1 '>
         <Badge color="success"  variant='dot' anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
         <Avatar  src={imgperson} ></Avatar>
         </Badge>
         </div>

         <div className='col d-flex input-rounded-circle p-2'>
           <input type={'text'} placeholder="اكتب تعليقا .." className='col border-0 p-1' />
           <div className='d-flex justify-content-center align-items-center'>
           <InsertEmoticonIcon className="mx-1 text-muted"/>
           <CameraAltIcon className="mx-1 text-muted"/>
           <GifBoxIcon className="mx-1  text-muted" />
           </div>
         </div>
    </div>
    </div>
  )
}

export default Comment