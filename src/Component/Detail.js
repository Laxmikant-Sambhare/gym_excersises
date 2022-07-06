import React from 'react'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'
const Detail = ({excerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } =  excerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
        {
            icon: TargetImage,
            name: target,
        }
    ]
  return (
    <Stack gap="60px" sx={{flexDirection: {lg: "row"}, p:'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap: {lg: '35px', xs: '20px' }}}>
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography>
               Exercises keep you Strong. {name} {' '}
               is one of the best exercise to target your {target}. It will help you 
               improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' gap="24px" alignItems={"center"}>
                   <Button sx={{background: '#fff2db', borderRadius: '50%', width:'100px',height:'100px'}}>
                     <img src={item.icon} alt={item.name} style={{width:'50px', height: '50px'}}/>
                     </Button>
                    <Typography textTransform={"capitalize"}>{item.name}</Typography>
                </Stack>
            ))}
        </Stack>
   </Stack>
  )
}

export default Detail