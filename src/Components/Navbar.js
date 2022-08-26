import React, { useEffect } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import face from  '../img/face.png'
import { imgperson } from '../data/data';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({setShowMenu,showMenu,RefNav}) => {
  const [value, setValue] = React.useState('/');
 const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue)
  };

  useEffect(()=>{
navigate('/')
  },[])
  return (
<div ref={RefNav} className='bg-white d-flex p-1 navbar mb-4'>
<div className='col-md-3 d-flex justify-content-around d-none d-md-flex'>

  <div><Avatar alt="Remy Sharp" src={`${face}`} /></div>
  <div className='input-parent d-flex border p-1 input-rounded-circle' >
  <span className='mx-1'><SearchIcon/></span>
  <input type={'text'} className="border-0 col "  placeholder="بحث فى فيسبوك"/>
  </div>
 
</div>
<div className='d-flex d-md-none col'>
<IconButton onClick={()=>setShowMenu(!showMenu)}>
<MenuIcon/>

</IconButton>
<div className='input-parent border d-flex  p-1 input-rounded-circle col' >
<span className='mx-1'><SearchIcon/></span>
<input type={'text'} className="border-0 col"  placeholder="بحث فى فيسبوك"/>
</div>
</div>
<div className='col-12 col-md-6' onClick={()=> setShowMenu(false)}>
     <BottomNavigation className='col-12' value={value} onChange={handleChange}>
     <BottomNavigationAction
       label={''}
       value="/"
       icon={ <HomeIcon  />}
     />
     <BottomNavigationAction
     label=""
     value="/friend"
     icon={<PeopleAltOutlinedIcon/>}
   />
     <BottomNavigationAction
       label=""
       value="/watch"
       icon={<OndemandVideoIcon/>}
     />
     <BottomNavigationAction label="" value="/market" icon={<StorefrontIcon />} />
     <BottomNavigationAction
       label=""
       value="/group"
       icon={<GroupsIcon />}
     />

   </BottomNavigation>
</div>


<div className='col-md-3  d-none d-md-block'>
                   <Stack direction="row" justifyContent='end' spacing={1}>
                      <Avatar className='' style={{background:"#f0f2f5"}}>
                             <AppsIcon className='text-dark' />
                       </Avatar>
                      <Avatar style={{background:"#f0f2f5"}}>
                      <svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-messenger" viewBox="0 0 16 16">
                      <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                    </svg>
                       </Avatar>

                         <Badge badgeContent={4} color="secondary" anchorOrigin={{vertical: 'top',horizontal: 'left',}} >
                             <Avatar style={{background:"#f0f2f5"}}>
                                <NotificationsIcon className='text-dark'/>
                            </Avatar>
                       </Badge> 
                       
                       <Avatar alt="omar" src={`${imgperson}`} />
                   </Stack>  
                
</div>
</div>
  )
}

export default Navbar