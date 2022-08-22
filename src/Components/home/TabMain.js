import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SwipeApp from './Swiper';
import {SwiperSlide } from "swiper/react";
import { Avatar, Button, Stack } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { reliz, story } from '../../data/data';

import { imgperson } from '../../data/data';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TabMain() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className='mb-3'>
      <AppBar position="static " className='bg-white text-dark border border-bottom'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="القصص"  className='font-weight-bolder' {...a11yProps(0)} />
          <Tab label="ريلز" className='font-weight-bolder' {...a11yProps(1)} />
          <Tab label="الغرف" className='font-weight-bolder' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews className='bg-white'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
          <div className='position-relative' >
            <SwipeApp>

                  {
                    story.map((i,idx)=>{
                        return(
                            <SwiperSlide style={{height:"180px"}} className='position-relative bg-info w-25 mx-1' key={idx}>
                            
                              <img src={`${i.imgstory}`} className="rounded h-100"  />
                           
                              <Avatar  src={`${i.imgperson}`} className='position-absolute' style={{top:"10px",right:"20px"}} />
                            
                           </SwiperSlide>
                        )
                    })
                  }
                  <SwiperSlide className=' w-25 mx-1 ' >
                  <div className='h-75 mt-0'>
                  <img src={imgperson} className="mt-0 h-75"   />
                  <p className='text-muted p-1 mt-4'>انشاء قصة</p>
                  </div>
              
                  <Avatar   className='position-absolute  ' style={{top:"50%",right:"33%"}} >
                       <div className='w-100 h-100 bg-primary d-flex ' style={{cursor:"pointer"}}>
                          <AddIcon className='m-auto'/>
                       </div>
                  </Avatar>
             
               </SwiperSlide>
            </SwipeApp>

          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
             <div className='position-relative' >
          <SwipeApp>
                {
                  reliz.map((i,idx)=>{
                      return(
                          <SwiperSlide className='position-relative w-25 mx-1' key={idx}>
                          <img src={`${i.img}`}  height={150}/>
                        
                         </SwiperSlide>
                      )
                  })
                }
          </SwipeApp>

        </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='position-relative' >
        <SwipeApp>
              {
                reliz.map((i,idx)=>{
                    return(
                        <SwiperSlide   className='position-relative w-50 mx-1 border p-2' key={idx}>
                          <Stack className='w-100' style={{height:"160px"}}>
                              <div className='m-auto text-center d-flex flex-column w-100'>
                                   <Avatar src={`${i.img}`} className="m-auto"/>
                                   <h5 className='mt-3'>ahmed</h5>
                              </div>
                              <Button variant="outlined" color='primary'>ترحيب</Button>
                          </Stack>
                      
                       </SwiperSlide>
                    )
                })
              }
        </SwipeApp>

      </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
