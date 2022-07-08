import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Box, Typography, Button } from '@mui/material'
import { useTheme } from '@mui/material'

export default function Home() {
  const theme = useTheme()
  const { palette } = theme
  const { primary, secondary } = palette

  return (
    <Box sx={{ display: 'flex', gap: "0.5rem", flexDirection: "column" }}>
      <Button variant="contained" color="primary">Button 1</Button>
      <Button variant="contained" color="secondary">Button 2</Button>

      <Link href="/posts/first-post">
        <a>This Index Page</a>
      </Link>
      <Typography sx={{ color: primary.main }} variant="h4">
        Hello Next JS
      </Typography>
      <Typography sx={{ color: secondary.main }} variant="h4">
        My Title 2
      </Typography>
    </Box>
  )
}
