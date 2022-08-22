import React from 'react'
import { imgperson } from '../../data/data'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Search from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import fa1 from '../../img/fa1.jpg'
import fa2 from '../../img/fa2.jpg'
import fa3 from '../../img/fa3.jpg'
import fa4 from '../../img/fa4.jpg'
import fa5 from '../../img/fa5.jpg'
import fa6 from '../../img/fa6.jpg'
export let arr = [{name:"احمد محمود",img:fa1},{name:"manar",img:fa2,d:true},{name:"mahmoud ",img:fa3},{name:"hamdiy",img:fa4,d:true},{name:"Gamal",img:fa5},{name:"mona",img:fa6}]
const Tabbar = () => {
  return (
    <div className='col-md-3 d-none d-md-block'>
<div className=''>

    <ul className='d-flex justify-content-between'>
       <li className='p-2 ' ><span className='p-2 ' >جهات الاتصال</span> </li>
       <li> <IconButton><VideoCallIcon/></IconButton> </li>
       <li ><IconButton><Search/></IconButton> </li>
       <li><IconButton><MoreHorizOutlinedIcon/></IconButton></li>
    </ul>
    <ul className='mx-2'>
      {
        arr.map((i,idx)=>{

          return(
                 
                 <li className='p-1 mb-2 link-sidbar' key={idx}>
                 <a  className='d-flex ' style={{cursor:"pointer"}}>
             
                     <div className=''>
                      <Badge  badgeContent={i.d?"س1":""} variant={i.d? "":"dot"} color="success" anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}>
                       <Avatar  src={`${i.img}`} >
                       </Avatar>
                       </Badge>
                     </div>
                     <div className='mx-3 my-auto' style={{color:"#050505"}}>{i.name}</div>
                 </a>
                  </li>
          )
        })
      }


  </ul>

</div>
    </div>
  )
}

export default Tabbar