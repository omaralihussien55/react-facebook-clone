import React from 'react'

import IndexMarket from './IndexMarket'

import SidBarMarket from './SidBarMarket'

const Market = () => {
  return (
    <div className='d-flex flex-column flex-md-row'>
    <div className='col-12   col-md-4 mx-auto mb-3 '>
        <SidBarMarket/>
    </div>
    <div className='col-12  col-md-8 mx-auto '>
     <IndexMarket/>
    </div>
    </div>
  )
}

export default Market