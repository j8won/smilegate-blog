import styled from "styled-components";
import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRecoilState } from "recoil";
import { BiSearch } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';
import darkModeState from "../recoil/atoms/darkModeState";
import {useNavigate} from "react-router-dom";
import routes from "../routes";

function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const navigate = useNavigate();
  return (
    <Container>
      <Logo onClick={() => {navigate(routes.home)}}>
        BLOG<span>.</span>
      </Logo>
      <RightContainer>
          <DarkModeSwitch
            className="dark-mode-switch"
            style={{  width: '23px', height: '23px', marginBottom: '0.2em' }}
            checked={darkMode}
            onChange={() => {setDarkMode(!darkMode)}}
            size={23}
            moonColor="#ECECEC"
            sunColor="#2d2d2d"
          />
        <Button className="center">
          <BiSearch />
        </Button>
        <Button>
          <IoSettingsSharp />
        </Button>
      </RightContainer>
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
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: ${props => props.theme.logoFont};
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.highlightColor};
  cursor: pointer;
  
  span {
    color: ${props => props.theme.orange}
  }
`;

const RightContainer = styled.div`
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  .dark-mode-swith {
    width: 24px;
  }
`;

const Button = styled.div`
  width: 26px;
  height: 26px;
  object-fit: contain;
  
  color: ${props => props.theme.highlightColor};
  font-size: 24px;
  cursor: pointer;
  
  &.center {
    margin: 0 20px;
  }
`;

export default React.memo(Header);
