import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { excerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScorllbar from './HorizontalScorllbar'

const SearchExcercises = ({excercises,setExcercises,bodyPart,setBodypart}) => {
    const [search , setSearch] = useState('')
    const [bodyParts, setBodyparts] = useState([])

    useEffect(() => {
        const fetchExcercisesData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions   
            )
            setBodyparts(['all', ...bodyPartsData])
        }

        fetchExcercisesData();
    },[])
    const handleSearch = async () => {
        if(search) {
            const excercisesData = await fetchData(
            'https://exercisedb.p.rapidapi.com/exercises', excerciseOptions
            ); 
            
            const searchedExercises = excercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
              );
            setSearch('');
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
            setExcercises(searchedExercises);
        }
    }

  return (
    <Stack
    alignItems={"center"}
    mt="37px"
    justifyContent={"center"}p="20px">
        <Typography fontWeight={700} 
        sx={{fontSize: {lg:"44px", xs:"30px"}}}
        mb="50px" textAlign="center">
            Awesome Excercises You <br/> 
            Should Know
        </Typography>
        <Box position={"relative"} mb= "72px">
        <TextField 
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Excercises"
        type="text"
        sx={{
            input: {fontweight: "700",border: 'none', borderRadius:'4px'},
            width: {lg: '800px', xs:'350px'},
            backgroundColor : '#fff',
            borderRadius: '40px'
        }}
        />
        <Button className='search-btn'
        sx={{
            bgcolor: "#FF2625",
            color: '#fff',
            textTransform: 'none',
            width:{lg:'175px', xs:'80px' },
            fontSize: {lg: '20px', xs:'14px'},
            height:"56px",
            position:'absolute',
            right:'0'
        }}
        onClick={handleSearch}
        >
            Search
        </Button>
        </Box>
        <Box sx={{ position: 'relative' , width: '100%', p:'20px'}}>
            <HorizontalScorllbar 
            data= {bodyParts} 
             bodyPart={bodyPart}
            setBodypart={setBodypart}
            isBodyparts
            />
        </Box>
    </Stack>
  )
}

export default SearchExcercises