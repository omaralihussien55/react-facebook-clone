import React from 'react'
import ModalCreatePost from './home/ModalCreatePost'

const Modals = ({children,align}) => {
  return (
    <div className='modals'>
     <div className={`modal-contents d-flex justify-content-center ${align}`} style={{width:"100%",height:"100%",zIndex:"90889"}}>
     {children}
     </div>
    
    </div>
  )
}

export default Modals