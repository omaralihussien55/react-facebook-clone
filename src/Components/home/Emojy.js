import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Emogy } from '../../data/data'
const Emojy = ({ChangeLike}) => {
  return (
    <div className=''>

    {
        Emogy.map((i,idx)=>{
            return(
                <React.Fragment key={idx}>
                <Tooltip style={{cursor:"pointer"}} title={i.title} arrow onClick={()=> ChangeLike(i.id)}>
                <img src={i.img} width={20} height={20} className="mx-1" />
                </Tooltip>
                </React.Fragment>
            )
        })
    }
    
 
    </div>
  )
}

export default Emojy