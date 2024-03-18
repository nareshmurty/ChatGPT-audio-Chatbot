import React from "react"
import { styled } from "@mui/system"

const MessageWrapper = styled("div")`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing(1, 2)};
  justify-content: ${({ align }) =>
    align === "user" ? "flex-end" : "flex-start"};
`
export default MessageWrapper
