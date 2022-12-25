import styled from "styled-components";

function StyledBody({ children }) {
  return (
    <Body>
      {children}
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  
  @media (min-width: 1024px) {
    padding: 16px calc(50% - 512px + 16px);
  }
  
  background-color: ${props => props.theme.bgColor};
`;

export default StyledBody;
