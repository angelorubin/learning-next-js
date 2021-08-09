import React from 'react'
import {
  styled,
  Grid,
  Paper,
  Box
} from "@material-ui/core"

import Image from 'next/image'

import bg from "public/bg.png"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {
  return (
    <Box sx={{ display: 'flex', height: "100vh", border: "1px solid red" }}>
      <Box sx={{
        flex: 1,

        objectFit: 'cover',
        width: "100%",
        height: "100%",
        border: "1px solid red"
      }}>
        <Image src={bg} alt="bg" width="100%" height="100%" />
      </Box>
      <Box sx={{
        flex: 1,
        border: "1px solid red"
      }}>
        dois
      </Box>
    </Box>
  )
}

export default Login
