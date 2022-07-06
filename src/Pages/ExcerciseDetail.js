import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../Component/Detail'
import ExcerciseVideos from '../Component/ExcerciseVideos'
import SimilarExcercises from '../Component/SimilarExcercises'
import { excerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
const ExcerciseDetail = () => {
  const [excerciseDetail, setExcercisedDtail] = useState({});
  const [exercisevideos,setExerciseVideos]= useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises]= useState([]);
  const [equipmentExercises,setEquipmentExercises] = useState([])
  const { id } =  useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
        const excerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
        const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

        const excerciseDetailData = await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
        setExcercisedDtail(excerciseDetailData)
        
      const exerciseVideosData = await fetchData(`${youTubeSearchUrl}/search?query=${excerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${excerciseDbUrl}/exercises/target/${excerciseDetailData.target}`,excerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
     
      const equipmentExercisesData = await fetchData(`${excerciseDbUrl}/exercises/equipment/${excerciseDetailData.equipment}`,excerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
      
    }

    fetchExercisesData();
  },[id])
  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail}/>
      <ExcerciseVideos exercisevideos={exercisevideos} name={excerciseDetail.name} />
      <SimilarExcercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExcerciseDetail