import { styled } from "@mui/system"
const AgentMessge = styled("div")`
  position: relative;
  background-color: ${({ theme }) => theme.palette.grey[300]};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(1, 2)};
  border-radius: 1rem;
  border-top-left-radius: 0;
  align-self: flex-end;
  max-width: 80%;
  word-wrap: break-word;
`
export default AgentMessge
