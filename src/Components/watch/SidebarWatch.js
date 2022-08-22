
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@mui/material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { blue } from '@mui/material/colors';
import ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Search from '@mui/icons-material/Search';
const SidebarWatch = () => {
  return (
    <div className='sidbarfrend'>
    <div className='d-flex justify-content-between align-items-center p-2 mb-2'>
    <div><h4>Watch</h4></div>
    <div className=''>
      <Avatar>
        <IconButton>
           <SettingsIcon/>
        </IconButton>
      </Avatar>
    </div>
    </div>

<div className='p-2'>
<div className='input-parent border p-1 input-rounded-circle' >
<span className='mx-1'><Search/></span>
<input type={'text'} className="border-0"  placeholder="بحث عن مقاطع فديو"/>
</div>
</div>

    <div className=''>
     <ul>
     <li className='p-1 mb-2 link-sidbar' >
     <a  className='d-flex ' style={{cursor:"pointer"}}>
         <Avatar  sx={{bgcolor:blue[600]}}>
            <OndemandVideoIcon  className='text-white'/>
         </Avatar>
         <div className='mx-3 my-auto' style={{color:"#050505"}}>{'الصفحة الرئيسية'}</div>
     </a>
  </li>

  <li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
  <a  className='d-flex col' style={{cursor:"pointer"}}>
      <Avatar >
         <VideocamIcon  className='text-dark'/>
      </Avatar>
      <div className='mx-3 my-auto' style={{color:"#050505"}}>{' بث مباشر'}</div>


      
  </a>
  <div><ChevronRightIcon/></div>
</li>

<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <MovieCreationIcon className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' العروض'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>


<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <BookmarkIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{'  مقاطع الفديو المعروضة'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>
     </ul>
    
    </div>
    
    </div>
  )
}

export default SidebarWatch