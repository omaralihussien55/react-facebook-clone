import { Button } from '@mui/material'
import React from 'react'
import { blue, blueGrey} from '@mui/material/colors'
import { imgperson } from '../../data/data'
import { arr } from '../home/Tabbar'
const Indexfrend = () => {
  return (
    <div className='p-2'>
    <h5 className='mx-4 my-3'>
       لا يوجد أشخاص قد تعرفهم
    </h5>
    <div className='row m-0'>
           {
            arr.map((i,idx)=>{
                if(i.name =="Gamal")return null
                return(

                <div className='col-12 col-md-6 col-lg-4   mb-2'>
                    <div className=' mx-2 bg-white'>
                         <div className='w-100 h-100'><img className='w-100 h-50' src={i.img} />   </div>
                          <p className='my-2 p-2'>{i.name}</p>
                          <div className='mb-1 p-2'>
                            <Button variant='text' sx={{width:"100%" ,bgcolor:blue[500],marginBottom:"5px",color:blueGrey[50]}} > اضافة صديق</Button>
                            <Button sx={{width:"100%" ,bgcolor:blue[100],marginBottom:"5px"}} > ازالة</Button>
                          </div> 
                    
                    </div>
                  </div>
                 
                )
            })
           }
    </div>
    
    </div>
  )
}

export default Indexfrend