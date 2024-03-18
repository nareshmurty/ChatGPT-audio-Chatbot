import "./App.css"
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
import { useTheme } from "@mui/material/styles"
import { styled } from "@mui/system"

import ChatHeader from "./Components/ChatHeader"
import { useState } from "react"
import ChatMessages from "./Components/ChatMessages"

function App() {
  const mockMessages = [
    {
      role: "assistant",
      content: "Hello, how can I help you today?",
      text: "Hello, how can I help you today?",
    },
  ]
  const [messages, setMessages] = useState(mockMessages)

  return (
    <Container maxWidth="sm" sx={{ pt: 2 }}>
      <ChatHeader />
      <ChatMessages messages={messages} />
    </Container>
  )
}

export default App
