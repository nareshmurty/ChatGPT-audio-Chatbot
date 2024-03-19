import React from "react"
import axios from "axios"
import { useTheme } from "@emotion/react"
import {
  IconButton,
  TextField,
  Box, // Add to imports
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

function MessageInput({
  message,
  setMessage,
  isAudioResponse,
  handleSendMessage,
}) {
  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Type your message"
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        color="primary"
        onClick={() => handleSendMessage(isAudioResponse)}
        disabled={message.trim() === ""}
      >
        <SendIcon />
      </IconButton>
    </Box>
  )
}

export default MessageInput
