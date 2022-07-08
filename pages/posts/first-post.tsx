import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Box, Typography, useTheme } from '@mui/material'

export default function FirstPost() {
  const theme = useTheme()
  const { palette } = theme
  const { primary, secondary } = palette
  const { main: primaryMain } = primary
  const { main: secondaryMain } = secondary

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: "column", backgroundColor: primaryMain }}>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: "column", backgroundColor: theme.palette.secondary.main }}>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Box>
    </>
  )
}
