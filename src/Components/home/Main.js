import React from 'react'
import Modals from '../Modals'
import Posts from './Posts'
import TabMain from './TabMain'
import Think from './Think'
const Main = () => {
  return (
    <div className='col-md-6'>
    <div className='col-11'>
    <TabMain/>
    <Think/>
    <Posts/>

    </div>
    </div>
  )
}

export default Main