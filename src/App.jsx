import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

// Login
import Login from './Login/Login'


import AllPages from './Pages/AllPages';




function App() {

  return (
    <div className='App'>

      <BrowserRouter>

      <Routes>
        <Route>
          {/* <Login /> */}
          <Route path="/" element={<Login />} />

          {/* <AllPages /> */}
          <Route path="/*" element={<AllPages />} />

        </Route>
      </Routes>


      </BrowserRouter>
     



    </div>
    

  )
}

export default App;




