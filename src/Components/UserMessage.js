import { styled } from "@mui/system"

const UserMessage = styled("div", {
  shouldForwardProp: (prop) => prop !== "audio",
})`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  padding-right: ${({ theme, audio }) =>
    audio ? theme.spacing(6) : theme.spacing(2)};
  border-radius: 1rem;
  border-top-right-radius: 0;
  align-self: flex-end;
  max-width: 80%;
  word-wrap: break-word;
`
export default UserMessage
