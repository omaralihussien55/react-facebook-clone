import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from './Components/Navbar';
import HomeApp from './Components/home/Home';
import Modals from './Components/Modals';
import Friends from './Components/friends/Friends';
import Watch from './Components/watch/Watch';
import Market from './Components/market/Market';

function App() {

  return (
<BrowserRouter>
  
    <div >

       <Navbar/>
       <Routes>
        <Route index element={<HomeApp/>}/>
        <Route path="/friend" element={<Friends/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/market" element={<Market/>}/>
       </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
