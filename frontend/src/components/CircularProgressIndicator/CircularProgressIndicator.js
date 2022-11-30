import React from "react"
import { CircularProgress, Box } from "@mui/material"

const CircularProgressIndicator = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 300,
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  )
}

export default CircularProgressIndicator
