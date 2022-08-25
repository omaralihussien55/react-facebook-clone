import React from 'react'
import Think from '../home/Think'
import Posts from '../home/Posts'
import Abstract from './Abstract'
const MainPerson = () => {
  return (
    <div className='row mt-3'>
    <div className='col-md-6'>
     <Abstract/>
    </div>
    <div className='col-md-6'>
       <Think/>
       <Posts/>
    </div>
    </div>
  )
}

export default MainPerson