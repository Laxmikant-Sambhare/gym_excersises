import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#fff3f4"}>
      <Stack gap={"40px"} alignItems="center" px={"40px"} pt="24px">
        <Typography variant='h5' pb={"40px"} mt="20px" >
            by nameLaxππππ
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer