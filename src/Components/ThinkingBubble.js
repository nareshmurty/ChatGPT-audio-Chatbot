import React from "react"
import {
  keyframes, // Add this import
  styled,
} from "@mui/system"
import { useTheme } from "@emotion/react"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"

function ThinkingBubble() {
  const pulse = keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }

  `

  const ThinkingBubbleStyled = styled(MoreHorizIcon)`
    animation: ${pulse} 1.2s ease-in-out infinite;
    margin-bottom: -5px;
  `
  const theme = useTheme()
  return <ThinkingBubbleStyled theme={theme} sx={{ marginBottom: "-5px" }} />
}

export default ThinkingBubble
