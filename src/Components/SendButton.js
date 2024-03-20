import React from "react"
import { useTheme } from "@emotion/react"
// import { API } from "aws-amplify"
import axios from "axios"
import ThinkingBubble from "./ThinkingBubble"
import { AltRoute } from "@mui/icons-material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

function SendButton({
  audioFile,
  filterMessageObjects,
  messages,
  setMessages,
  isAudioResponse,
  handleBackendResponse,
}) {
  const theme = useTheme()
  const uploadAudio = async () => {
    if (!audioFile) {
      console.log("No audio file to upload")
      return
    }

    try {
      const reader = new FileReader()
      reader.onloadend = async () => {
        const base64Audio = reader.result

        // Add a unique id to the message to be able to update it later
        const messageId = new Date().getTime()

        // Create the message objects
        let messageObjects = filterMessageObjects(messages)

        // Add user's audio message to the messages array
        setMessages((prevMessage) => [
          ...prevMessage,
          {
            role: "user",
            content: "🎤 Audio Message",
            audio: new Audio(base64Audio),
            text: "🎤 Audio Message",
            id: messageId,
          },
        ])
        // Add thinking bubble
        setMessages((prevMessage) => [
          ...prevMessage,
          {
            role: "assistant",
            content: (
              <ThinkingBubble theme={theme} sx={{ marginBottom: "-5px" }} />
            ),
            text: (
              <ThinkingBubble theme={theme} sx={{ marginBottom: "-5px" }} />
            ),
            key: "thinking",
          },
        ])
        const response = await axios.post("api", "/get-answer", {
          headers: { "Content-Type": "application/json" },
          body: {
            audio: base64Audio,
            messages: messageObjects,
            isAudioResponse,
          },
        })
        // Remove the thinking bubble
        setMessages((prevMessage) => {
          return prevMessage.filter((message) => message.key !== "thinking")
        })
        handleBackendResponse(response, messageId)
      }

      reader.readAsDataURL(audioFile)
    } catch (e) {
      console.error("Error uploading the audio file:", e)
      alert(e)
    }
  }
  return (
    <Grid item xs="auto">
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={uploadAudio}
        disabled={!audioFile}
        startIcon={<CloudUploadIcon />}
      >
        Upload Audio
      </Button>
    </Grid>
  )
}

export default SendButton
