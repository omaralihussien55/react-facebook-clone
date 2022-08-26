import React, { useEffect, useRef, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import HomeApp from './Components/home/Home';
import Friends from './Components/friends/Friends';
import Watch from './Components/watch/Watch';
import Market from './Components/market/Market';
import PersonalFile from './Components/personal/PersonalFile';
import MainPerson from './Components/personal/MainPerson'
import Sidebar from './Components/home/Sidebar';
function App() {
const [showMenu,setShowMenu] = useState(false)
const [height,setHeight] = useState(null)
const RefNav= useRef(null)
const RefHome = useRef(null)

useEffect(()=>{
  const {height} = RefNav.current.getBoundingClientRect()
  setHeight(height)
  RefHome.current.style.marginTop= `${height}px`
  window.onresize = ()=>{
    const {height} = RefNav.current.getBoundingClientRect()
    RefHome.current.style.marginTop= `${height}px`
  }

},[])
 
  return (
<BrowserRouter>
  
    <div >

       <Navbar RefNav={RefNav} showMenu={showMenu} setShowMenu={setShowMenu}/>

<div ref={RefHome}  className='position-relative  ' onClick={()=> setShowMenu(false)}>
{showMenu && <div className=' position-absolute bg-light  col-12 d-md-none col-lg-6 h-100 p-2' style={{right:"0",top:"0",zIndex:"100000"}}>
<Sidebar display={"block"} />
</div>}
<Routes>
<Route path='/' element={<HomeApp/>}/>
<Route path="/friend" >
  <Route index element={<Friends/>} />
</Route>
<Route path="/watch" element={<Watch/>}/>
<Route path="/market" element={<Market/>}/>
<Route path='/person' element={<PersonalFile/>}>
    <Route index element={<MainPerson/>}>
          
    </Route>
</Route>
</Routes>
</div>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
