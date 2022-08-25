
import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@mui/material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { blue } from '@mui/material/colors';
import ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Search from '@mui/icons-material/Search';
import Modals from '../Modals';
import ModaSearchSm from './ModaSearchSm';
const SidebarWatch = () => {

   const [modaSearchSm,setModaSearchSm] = useState(false)
  return (
    <div className='sidbarfrend d-flex d-md-block ' >
     {modaSearchSm&&<Modals align={""}><ModaSearchSm setModaSearchSm={setModaSearchSm}/></Modals>}
    <div className='d-flex justify-content-between align-items-center p-2 mb-2'>
    <div><h4>Watch</h4></div>
    <div className=' d-none d-md-block'>
      <Avatar >
        <IconButton>
           <SettingsIcon/>
        </IconButton>
      </Avatar>
    </div>
    </div>

<div className='p-2 d-none d-md-block'>
<div className='input-parent border p-1 input-rounded-circle' >
<span className='mx-1'><Search/></span>
<input type={'text'} className="border-0"  placeholder="بحث عن مقاطع فديو"/>
</div>
</div>

    <div className=''>
     <ul className='row m-0 flex-nowrap flex-md-wrap'>
     <li className='col col-md-12 p-1 mb-2 link-sidbar' >
     <a  className='d-flex ' style={{cursor:"pointer"}}>
         <Avatar className='d-none d-md-block' sx={{bgcolor:blue[600]}}>
            <OndemandVideoIcon  className='text-white'/>
         </Avatar>
         <div className='mx-3 my-auto' style={{color:"#050505"}}>{'الصفحة الرئيسية'}</div>
     </a>
  </li>

  <li className='col col-md-12 p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
  <a  className='d-flex col' style={{cursor:"pointer"}}>
      <Avatar className='d-none d-md-block'>
         <VideocamIcon  className='text-dark'/>
      </Avatar>
      <div className='mx-3 my-auto' style={{color:"#050505"}}>{' بث مباشر'}</div>


      
  </a>
  <div className='d-none d-md-block'><ChevronRightIcon/></div>
</li>

<li className='col col-md-12 p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar className='d-none d-md-block'>
       <MovieCreationIcon className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' العروض'}</div>
</a>
<div className='d-none d-md-block'><ChevronRightIcon/></div>
</li>


<li className='col col-md-12 d-none d-md-block p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar className='d-none d-md-block'>
       <BookmarkIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{'  مقاطع الفديو المعروضة'}</div>
</a>
<div className='d-none d-md-block'><ChevronRightIcon/></div>
</li>

<li className='col d-md-none' >
   <IconButton onClick={() => setModaSearchSm(true)}>
   <Avatar >
   <Search />
   </Avatar>
   </IconButton>
</li>
     </ul>
    
    </div>
    
    </div>
  )
}

export default SidebarWatch