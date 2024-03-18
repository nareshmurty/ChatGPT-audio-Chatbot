import React from "react"
import { useEffect, useState, useRef } from "react"
import { useTheme } from "@mui/material/styles"
import UserMessage from "./UserMessage"
import MessageWrapper from "./MessageWrapper"
import AgentMessage from "./AgentMessage"

import {
  Container,
  Grid,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"

function ChatMessages({ messages }) {
  const theme = useTheme()
  const bottomRef = useRef(null)

  const scrollToBottom = () => {
    if (bottomRef.current) {
      if (typeof bottomRef.current.scrollIntoViewIfNeeded === "function")
        bottomRef.current.scrollIntoViewIfNeeded({ behavior: "smooth" })
      else bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          mt: 4,
          maxHeight: 300,
          minHeight: 300,
          overflow: "auto",
        }}
      >
        <Paper elevation={0} sx={{ padding: 2 }}>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} sx={{ padding: 0 }}>
                <ListItemText
                  sx={{ margin: 0 }}
                  primary={
                    <MessageWrapper align={message.role}>
                      {message.role === "user" ? (
                        <>
                          <UserMessage theme={theme} audio={message.audio}>
                            {message.text}
                            {message.audio && (
                              <IconButton
                                size="small"
                                sx={{
                                  position: "absolute",
                                  top: "50%",
                                  right: 8,
                                  transform: "translateY(-50%)",
                                }}
                                onClick={() => message.audio.play()}
                              >
                                <VolumeUpIcon fontSize="small" />
                              </IconButton>
                            )}
                          </UserMessage>
                        </>
                      ) : (
                        <AgentMessage theme={theme}>
                          {message.text}
                        </AgentMessage>
                      )}
                    </MessageWrapper>
                  }
                />
              </ListItem>
            ))}
            <div ref={bottomRef} />
          </List>
        </Paper>
      </Box>
    </Container>
  )
}

export default ChatMessages
