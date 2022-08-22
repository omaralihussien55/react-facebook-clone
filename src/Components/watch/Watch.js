import React from 'react'

import IndexWatch from './IndexWatch'

import SidebarWatch from './SidebarWatch'

const Watch = () => {
  return (
    <div className='d-flex'>
    <div className='col-6  col-md-4 '>
        <SidebarWatch/>
    </div>
    <div className='col-6 col-md-8 '>
     <IndexWatch/>
    </div>
    </div>
  )
}

export default Watch