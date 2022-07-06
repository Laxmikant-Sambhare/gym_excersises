import { Box } from '@mui/material'
import React, { useState } from 'react'
import Excercises from '../Component/Excercises'
import HeroBanner from '../Component/HeroBanner'
import SearchExcercises from '../Component/SearchExcercises'

const Home = () => {
  const [excercises, setExcercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercises
      excercises={excercises}
      setExcercises={setExcercises}
      bodyPart={bodyPart}
      setBodypart={setBodyPart}
      />
      <Excercises
       setExcercises={setExcercises}
       bodyPart={bodyPart}
       excercises= {excercises}
      />
    </Box>
  )
}

export default Home