import { Button } from '@mui/material'
import React, { useState } from 'react'
import { blue, blueGrey } from '@mui/material/colors'
const Abstract = () => {
    const [show,setShow] = useState(false)
    const [bio  , setBio ] = useState("")
  return (
    <div className='p-4 bg-white'>
       <h4 className='p-1 mb-2'>نبذة مختصرة</h4>
     <div className=''>
       <div className={show?"d-none":'d-block'} >
         <p className='text-center p-1 mb-1'>{bio}</p>
         <Button variant="contained" 
         sx={{bgcolor:blueGrey[50],width:'100%',color:"black"}}
         onClick={()=> setShow(true)}
         >
               تعديل السيرة الذاتية
         </Button>
       </div>
       </div>

       <div className={show ?'d-block':"d-none"}>
         <div className='mb-2'>
            <input type={'text'} className='p-2 text-center border' 
            style={{background:"#f0f2f5",height:"80px",width:"100%"}}
              maxLength={100} placeholder="صف نفسك"
               value={bio}
              onChange={(e)=>  setBio(e.target.value)}
              />
         </div>
       <div className='mb-2 d-flex justify-content-end'>
       
       <Button variant="text" 
       sx={{bgcolor:blueGrey[50],width:'50px',color:"black",marginRight:1}}
       onClick={()=> setShow(false)}
       >
       الغاء
      </Button>
       <Button variant={bio.length >=1 ?"contained":"text"}  
       sx={{bgcolor:bio.length >=1?blue[500]:blueGrey[50],width:'50px',color:bio.length >=1?"white":"black",marginRight:1}}
       onClick={()=> setShow(false)}  disabled={bio.length >=1 ? false : true}
       >
          حفظ
       </Button>
       </div>
       </div>
    </div>
  )
}

export default Abstract