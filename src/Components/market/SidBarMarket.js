
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SellIcon from '@mui/icons-material/Sell';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { blue } from '@mui/material/colors';
import ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import Search from '@mui/icons-material/Search';
const SidBarMarket = () => {
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
<input type={'text'} className="border-0"  placeholder="بحث   فى Market Place"/>
</div>
</div>

    <div className=''>
     <ul>
     <li className='p-1 mb-2 link-sidbar' >
     <a  className='d-flex ' style={{cursor:"pointer"}}>
         <Avatar  sx={{bgcolor:blue[600]}}>
            <StorefrontIcon  className='text-white'/>
         </Avatar>
         <div className='mx-3 my-auto' style={{color:"#050505"}}>{' تصفح الكل'}</div>
     </a>
  </li>

  <li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
  <a  className='d-flex col' style={{cursor:"pointer"}}>
      <Avatar >
         <NotificationsIcon  className='text-dark'/>
      </Avatar>
      <div className='mx-3 my-auto' style={{color:"#050505"}}>{'  الاشعارات'}</div>


      
  </a>
  <div><ChevronRightIcon/></div>
</li>

<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <EmailIcon className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{' البريد الوارد'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>


<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <LocalMallIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{'الشراء'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>


<li className='p-1 mb-2 link-sidbar d-flex justify-content-between align-items-center' >
<a  className='d-flex col' style={{cursor:"pointer"}}>
    <Avatar >
       <SellIcon   className='text-dark'/>
    </Avatar>
    <div className='mx-3 my-auto' style={{color:"#050505"}}>{'البيع'}</div>
</a>
<div><ChevronRightIcon/></div>
</li>
     </ul>
    
    </div>
    
    </div>
  )
}

export default SidBarMarket