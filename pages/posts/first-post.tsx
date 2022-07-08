import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { Box, Typography } from '@mui/material'
import { useTheme } from "@mui/material"

export default function FirstPost() {
  const theme = useTheme()
  const { palette } = theme
  const { primary, secondary, error } = palette

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: "column", backgroundColor: primary.main }}>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: "column", backgroundColor: error.main }}>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Box>
    </Box>
  )
}
