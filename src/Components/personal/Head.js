import React from 'react'
import MainPerson from './MainPerson';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/Upload';
import { imgperson } from '../../data/data'
import { blueGrey } from '@mui/material/colors';
import Barpersonal from './Barpersonal';
import { Avatar, Badge } from '@mui/material';
import { Add } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
const Head = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    
  return (
    <div className='headPersonal'>
    <div className='col-10 mx-auto'>
            <div className='cover position-relative' style={{backgroundImage: `url(${imgperson})`}}>
              <div className='position-absolute bg-white' style={{left:"20px",bottom:"30px"}}>
              <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{bgcolor:blueGrey[50]}}
            >
             <CameraAltIcon/>
             <span className='mx-2'>اضافة صورة غلاف</span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}  ><ImageIcon/><span className='mx-2'>تحميل صورة</span> </MenuItem>
              <MenuItem onClick={handleClose}> <UploadIcon/> <span className='mx-2'>تحديد صورة</span>    </MenuItem>
           
            </Menu>
              </div>
            
            </div>

            <div className='row m-0 ' style={{height:"35vh"}}>
                     <div className='col-md-6 d-flex '>
                           <div className='position-relative '>
                                  <div className='avatar' style={{backgroundImage: `url(${imgperson})`}}>
                                    <div className='badges'>
                                    <CameraAltIcon/>
                                    </div>
                                  </div>
                           </div>
                          <h4 className='mx-4 my-3 col'>omar ali</h4>
                     </div>

                     <div className='col-md-6 d-flex justify-content-center flex-column'>
                      <div className='d-flex'>
                        <Button variant="contained" sx={{marginLeft:2}} >
                        <Avatar sx={{width:20,height:20,bgcolor:blueGrey[50]}}>
                        <Add className='text-primary'/>
                       </Avatar>
                           <span className='mx-2'>اضافة الى القصة</span>
                        </Button>
                        <Button variant="contained" sx={{bgcolor:blueGrey[50],marginLeft:2}}>
                        <EditIcon className='text-dark'/>
                           <span className='mx-2 text-dark'> تعديل الملف الشخصى </span>
                        </Button>
                      </div>
                     </div>

            </div>
           
            <hr></hr>
            <Barpersonal/>

            <MainPerson/>
    </div>

    
    </div>
  )
}

export default Head

// <div className='parent-avatar mx-auto  col-4 '>


// </div>