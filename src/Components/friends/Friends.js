import React from 'react'
import Indexfrend from './indexfrend'
import SidbarFrends from './SidbarFrends'

const Friends = () => {
  return (
    <div className='d-flex flex-column flex-md-row'>
    <div className='col-12   col-md-4 mx-auto mb-3'>
        <SidbarFrends/>
    </div>
    <div className='col-12  col-md-8 mx-auto'>
     <Indexfrend/>
    </div>
    </div>
  )
}

export default Friends