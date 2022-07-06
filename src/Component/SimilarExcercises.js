import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScorllbar from './HorizontalScorllbar'
import Loader from './Loader'

const SimilarExcercises = ({targetMuscleExercises , equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg:"100px", xs:'0'}}}>
        <Typography variant='h3' mb={5}>
            Exercises that target the same muscle group
        </Typography>
        <Stack direction={"row"} sx={{p:"2", position:"relative"}}>
            {targetMuscleExercises.length ? <HorizontalScorllbar data={targetMuscleExercises}/>:
            <Loader/>
            }
            </Stack> 
        <Typography variant='h3' mb={5}>
            Exercises that uses the same equipment
        </Typography>
        <Stack direction={"row"} sx={{p:"2", position:"relative"}}>
            {equipmentExercises.length ? <HorizontalScorllbar data={equipmentExercises}/>:
            <Loader/>
            }
            </Stack> 
    </Box>
  )
}

export default SimilarExcercises