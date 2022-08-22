import React from 'react'
import ModalCreatePost from './home/ModalCreatePost'

const Modals = ({children}) => {
  return (
    <div className='modals'>
     <div className='modal-contents'>
     {children}
     </div>
    
    </div>
  )
}

export default Modals