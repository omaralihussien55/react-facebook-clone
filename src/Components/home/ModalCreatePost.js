import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import pi from '../../img/pi.png'
import { imgperson } from '../../data/data';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const ModalCreatePost = ({setShow}) => {
  return (
    <div  className='col-4 bg-white p-2'>
    <div className='text-center p-3  mb-2 border-bottom position-relative'>
                       إنشاء منشور
             <div className='position-absolute' style={{top:"5px",left:"10px"}}>
             <Avatar  >
             <IconButton onClick={()=> setShow(false)}>
                <CloseOutlinedIcon/>
             </IconButton>
          </Avatar>
          </div>
 </div>
 
   <div  className='d-flex ' style={{cursor:"pointer"}}>
       <div className=''>
        <img width={30}  height={30} style={{borderRadius:"50%"}} src={imgperson}  />
       </div>
       <div className='mx-3' style={{color:"#050505"}}>{'Omar Ali'}</div>
   </div>

   <div >
      <textarea className='w-100 border-0 textarea p-2' placeholder='بم تفكر يا  omar Ali ؟' />
   
   </div>

   <div className='border'>
<Button variant="text" size="medium" style={{color:"black"}} >

اضافة الى منشورك
</Button>

<Button variant="text" size="medium" style={{color:"black"}} >
<img src={pi} width={30} height={30} className="mx-2" />

</Button>
<Button variant="text" size="medium"  style={{color:"black"}}>
<EmojiEmotionsIcon className='text-danger mx-2'/>

</Button>

<Button variant="text" size="medium"  style={{color:"black"}}>

<AddLocationAltOutlinedIcon className='text-primary'/>
</Button>
   </div>

  <div className='my-3'>
  
  <Button variant="contained" size="medium" className='w-100'  style={{color:"black"}}>
نشر
   
  </Button>
  
  </div>

    </div>
  )
}

export default ModalCreatePost