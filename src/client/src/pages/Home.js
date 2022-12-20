import {Helmet} from "react-helmet-async";
import styled from "styled-components";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Helmet>
        <title>BLOG. - 오늘의 학습을 기록해 보세요</title>
      </Helmet>
      <Body>
        <Header />
      </Body>
    </>
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

export default Home;
