import React from 'react'
import { Link } from 'react-router-dom'
import { dataSidbar } from '../../data/data'
import { imgperson } from '../../data/data'
const Sidebar = ({display}) => {
  return (
    <div className={`col-md-3 d-${display}  d-md-block`} >

    <ul className='mx-2'>

    <li className='p-1 mb-2 link-sidbar'>
    <Link to={'/person'} className='d-flex ' style={{cursor:"pointer"}}>
        <div className=''>
         <img width={30}  height={30} style={{borderRadius:"50%"}} src={imgperson}  />
        </div>
        <div className='mx-3' style={{color:"#050505"}}>{'Omar Ali'}</div>
    </Link>
</li>
          {
            dataSidbar.map((i,idx)=>{
                return(
                    <li className='p-1 mb-2 link-sidbar' key={idx}>
                    <a  className='d-flex ' style={{cursor:"pointer"}}>
                        <div className=''>
                         <img width={30} height={30} src={i.img}  />
                        </div>
                        <div className='mx-3' style={{color:"#050505"}}>{i.title}</div>
                    </a>
             </li>
                )
            })
          }
  
    </ul>
    
    </div>
  )
}

export default Sidebar