import React from 'react'

import IndexWatch from './IndexWatch'

import SidebarWatch from './SidebarWatch'

const Watch = () => {
  return (
    <div className='d-flex flex-column flex-md-row'>
    <div className='col-12   col-md-4 mx-auto mb-3'>
        <SidebarWatch/>
    </div>
    <div className='col-12  col-md-8 mx-auto '>
     <IndexWatch/>
    </div>
    </div>
  )
}

export default Watch