import { Box } from '@mui/material'
import React from 'react'
import "./App.css"
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import ExcerciseDetail from './Pages/ExcerciseDetail'
const App = () => {
  return (
        <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/excercise/:id' element={<ExcerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
  )
}

export default App