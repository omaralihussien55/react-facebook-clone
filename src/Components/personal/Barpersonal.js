import React from 'react'
import {useNavigate } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
const Barpersonal = () => {
    const [value, setValue] = React.useState('/');
    const navigate = useNavigate()
     const handleChange = (event, newValue) => {
       setValue(newValue);
      //  navigate(newValue)
     };
  return (
    <div>
    <BottomNavigation  value={value} onChange={handleChange}>
    <BottomNavigationAction
      label={' '}
      value="/posts"
      icon={"المنشورات"}
    />
    <BottomNavigationAction
    label=""
    value="/about"
    icon={"حول"}
  />
    <BottomNavigationAction
      label=""
      value="/friend"
      icon={"الاصدقاء"}
    />
    <BottomNavigationAction label="" value="/image" icon={"الصور"}  />
    <BottomNavigationAction
      label=""
      value="/video"
      icon={"الفديو"}
    />

  </BottomNavigation>
    
    </div>
  )
}

export default Barpersonal