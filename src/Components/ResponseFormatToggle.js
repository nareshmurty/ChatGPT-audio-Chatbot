import React, { useState } from "react"
import {
  FormControlLabel, // Add to imports
  Switch, // Add to imports
  Box,
} from "@mui/material"
import { Margin } from "@mui/icons-material"

function ResponseFormatToggle({ isAudioResponse, setIsAudioResponse }) {
  const handleToggleChange = (e) => {
    setIsAudioResponse(e.target.checked)
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
      <FormControlLabel
        control={
          <Switch
            checked={isAudioResponse}
            onChange={handleToggleChange}
            color="primary"
          />
        }
        label="Audio response"
      />
    </Box>
  )
}

export default ResponseFormatToggle
