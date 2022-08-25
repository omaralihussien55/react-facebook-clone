import React,{useRef, useState, useEffect} from 'react'
import { imgperson } from '../../data/data'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';

import Button from '@mui/material/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import vi from '../../img/vi.png'
import pi from '../../img/pi.png'
import ModalCreatePost from './ModalCreatePost';
import Modals from '../Modals';
const Think = () => {
  const [think,setThink ] = useState("")
 const [show,setShow] = useState(false)
   const RefThink = useRef(null)


  
  return (
    <div  className='mb-3 p-2 bg-white border'>
    {show && <Modals align={"align-items-center"}> <ModalCreatePost setShow={setShow} /> </Modals>}
    <div className=' d-flex  '>
         <div><Avatar alt="Remy Sharp" src={imgperson} /></div>
               <div className='input-parent border col mx-2 p-1 input-rounded-circle' >
                <span className='mx-1'><SearchIcon/></span>
                  <input ref={RefThink} type={'text'} className="border-0" onFocus={()=> setShow(true)}    placeholder="بم تفكر يا  omar Ali ؟"/>
            </div>
       
         
    </div>
    <hr/>
    <div className='d-flex justify-content-between align-items-center'>
    
<Button variant="text" size="medium" style={{color:"black"}} >
<img src={vi} width={30} height={30} className="mx-2" />
<span className=''>فيديو بث مباشر</span>
</Button>


<Button variant="text" size="medium" style={{color:"black"}} >
<img src={pi} width={30} height={30} className="mx-2" />
<span className=''>صورة/فيديو</span>
</Button>



<Button variant="text" size="medium"  style={{color:"black"}}>
<EmojiEmotionsIcon className='text-danger mx-2'/>
<span className=''>شعور/نشاط</span>
</Button>

    </div>

    </div>
  )
}

export default Think