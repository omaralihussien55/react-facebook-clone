
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CakeIcon from '@mui/icons-material/Cake';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import { blue } from '@mui/material/colors';
import ChevronRightIcon  from '@mui/icons-material/ChevronRight';
const SidbarFrends = () => {
  return (
    <div className='sidbarfrend'>
    <div className='d-flex justify-content-between align-items-center p-2 mb-2'>
    <div><h4>الاصدقاء</h4></div>
    <div className=''>
      <Avatar>
        <IconButton>
           <SettingsIcon/>
        </IconButton>
      </Avatar>
    </div>
    </div>

    <div className=''>
     <ul>
     <li className='p-1 mb-2 link-sidbar' >
     <a  className='d-flex ' style={{cursor:"pointer"}}>
         <Avatar  sx={{bgcolor:blue[600]}}>
            <GroupIcon  className='text-white'/>
         </Avatar>
         <div className='mx-3 my-auto' style={{color:"#050505"}}>{'الصفحة الرئيسية'}</div>
     </a>
  </li>

  <li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
  <a  className='d-flex col' style={{cursor:"pointer"}}>
      <Avatar >
         <GroupAddIcon  className='text-dark'/>
      </Avatar>
      <div className='mx-3 my-auto' style={{color:"#050505"}}>{'طلبات الصداقة'}</div>


      
  </a>
  <div><ChevronRightIcon/></div>
</li>

<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <PermContactCalendarIcon className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' الاقتراحات'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>


<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <PersonPinIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' كل الاصدقاء'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>

<li className='p-1 mb-2 link-sidbar' >
<a  className='d-flex ' style={{cursor:"pointer"}}>
    <Avatar  >
       <CakeIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' اعياد الميلاد'}</div>
</a>
</li>


<li className='p-1 mb-2 link-sidbar  d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <PregnantWomanIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{'  قوائم مخصصة'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>

     </ul>
    
    </div>
    
    </div>
  )
}

export default SidbarFrends