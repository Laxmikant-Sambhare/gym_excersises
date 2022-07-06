import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import Excercisecard from './Excercisecard'

const Excercises = ({ setExcercises, bodyPart,  excercises}) => {
    console.log("Excercises>>",excercises)
    const [currentPage, setCurrentPage] = useState(1);
    const excercisesPerpage = 9;
    const indexOfLastExcercise = currentPage*excercisesPerpage;
    const indexOfFirstExcercise = indexOfLastExcercise-excercisesPerpage;
    const currentExcercises = excercises.slice(indexOfFirstExcercise,indexOfLastExcercise)
    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({top: 1500,  behavior:'smooth'})

    }

  useEffect(() => {
    const fetchExcercisesData = async () =>{
       let excercisesData = [];
       
       if(bodyPart === 'all'){
        excercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises', excerciseOptions
            ) 
       }else{
        excercisesData=await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions
            ); 
       }
       
       setExcercises(excercisesData);
    }
    fetchExcercisesData();
  },[bodyPart] ) 
  return (
    <Box id="excercises"
    sx={{mt: {lg:'110px'}}}
    mt="50px"
    p="20px"
    >
        <Typography variant='h3' mb={"46px"}>
            Showing Result
        </Typography>
        <Stack direction="row" sx= { {gap:{lg: '110px', xs:'50px'}}}
        flexWrap='wrap' justifyContent={"center"}
        >
            {currentExcercises.map((excercise, index) => {
              return( <Excercisecard key={index} excercise={excercise}/>)
            })}
        </Stack>
        <Stack mt="100px" alignItems={"center"}>
            {excercises.length > 9 && (
                <Pagination
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(excercises.length / excercisesPerpage)}
                page={currentPage}
                onChange={paginate}
                size="large"
                />
            ) }
        </Stack>
    </Box>
  )

}

export default Excercises