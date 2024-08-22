import styled from "styled-components";

export default function ErrorMessages({ children }) {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
}
const StyledErrorMessage = styled.span`
  font-size: 14px;
  color: red;
`;
