import React from 'react'
import Indexfrend from './indexfrend'
import SidbarFrends from './SidbarFrends'

const Friends = () => {
  return (
    <div className='d-flex'>
    <div className='col-6  col-md-4 '>
        <SidbarFrends/>
    </div>
    <div className='col-6 col-md-8'>
     <Indexfrend/>
    </div>
    </div>
  )
}

export default Friends