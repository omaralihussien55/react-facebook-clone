import React from 'react'
import { imgperson } from '../../data/data'
import { markets } from '../../data/data'
const IndexMarket = () => {
  return (
    <div className='p-3'>

    <h5 className='my-3 p-1 mx-3'>اختيارات اليوم</h5>
    
       <div className='row  m-0  '>
              {
                 markets.map((i,idx)=>{
                    return(
                         <div className='col-12 col-md-6 col-lg-4   mb-2 '>
                        <div className='mx-auto bg-light'>
                              <div className='w-100 h-75'>
                                 <img src={i.img} className='w-100 h-100'/>
                              </div>
                               <ul className='p-2 my-2'>
                                <li className='p-1 mb-1 text-muted '>{i.name}</li>
                                <li className='p-1 mb-1 text-muted '>{i.price} ج.م</li>
                                <li className='p-1 mb-1 text-muted '>{i.loc}</li>
                               
                               </ul>
    
                        </div>
                  
                  </div>
                    )
                 })

              }


              
       </div>
    
    </div>
  )
}

export default IndexMarket