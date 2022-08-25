import React from 'react'
import Modal from '../Modals'
import Main from './Main'
import Sidebar from './Sidebar'
import Tabbar from './Tabbar'

const HomeApp = () => {

  return (
    <div className='d-flex p-2 mt-2'>
  
     <Sidebar display={"none"}/>
     <Main/>
     <Tabbar/>
    </div>
  )
}

export default HomeApp