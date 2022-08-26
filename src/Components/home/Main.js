import React from 'react'
import Modals from '../Modals'
import Posts from './Posts'
import TabMain from './TabMain'
import Think from './Think'
const Main = () => {
  return (
    <div className='col-12 col-md-6'>
    <div className='col-11 mx-auto'>
    <TabMain/>
    <Think/>
    <Posts/>

    </div>
    </div>
  )
}

export default Main