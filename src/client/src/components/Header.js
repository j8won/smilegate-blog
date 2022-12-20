import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo>
        BLOG<span>.</span>
      </Logo>
      <RightContainer></RightContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 64px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${props => props.theme.logoFont};
  font-weight: 700;
  font-size: 24px;
  color: ${props => props.theme.highlightColor};
  
  span {
    color: ${props => props.theme.orange}
  }
`;

const RightContainer = styled.div``;

export default Header;
