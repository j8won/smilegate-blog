import {Helmet} from "react-helmet-async";
import styled from "styled-components";
import Header from "../components/Header";
import CategoryBar from "../components/home/CategoryBar";
import PostInfo from "../components/home/PostInfo";

function Home() {
  return (
    <>
      <Helmet>
        <title>BLOG. - 오늘의 학습을 기록해 보세요</title>
      </Helmet>
      <Body>
        <Header />
        <CategoryBar />
        <PostInfoContainer>
          <PostInfo thumbnailUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Poodel-Standard.jpg/250px-Poodel-Standard.jpg"/>
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
          <PostInfo />
        </PostInfoContainer>
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

const PostInfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  
  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default Home;
