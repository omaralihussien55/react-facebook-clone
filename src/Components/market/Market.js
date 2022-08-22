import React from 'react'

import IndexMarket from './IndexMarket'

import SidBarMarket from './SidBarMarket'

const Market = () => {
  return (
    <div className='d-flex'>
    <div className='col-6  col-md-4 '>
        <SidBarMarket/>
    </div>
    <div className='col-6 col-md-8 '>
     <IndexMarket/>
    </div>
    </div>
  )
}

export default Market