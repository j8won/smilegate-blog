import {Helmet} from "react-helmet-async";
import styled from "styled-components";
import Header from "../components/Header";
import CategoryBar from "../components/home/CategoryBar";
import PostInfo from "../components/home/PostInfo";
import {useEffect, useState} from "react";
import { useRecoilValue} from "recoil";
import categoryState from "../recoil/atoms/categoryState";
import PostAPI from "../lib/api/PostAPI";

function Home() {
  const [postArray, setPostArray] = useState([]);
  const typeState = useRecoilValue(categoryState);

  useEffect(() => {
    const getPostArray = async () => {
      if (typeState.TIL !== false) {
        const response = await PostAPI.getAllPostsByType("TIL");
        setPostArray(response.data);
      }

      if (typeState.Frontend !== false) {
        const response = await PostAPI.getAllPostsByType("Frontend");
        setPostArray(response.data);
      }

      if (typeState.Backend !== false) {
        const response = await PostAPI.getAllPostsByType("Backend");
        setPostArray(response.data);
      }

      if (typeState.Algorithm !== false) {
        const response = await PostAPI.getAllPostsByType("Algorithm");
        setPostArray(response.data);
      }
    };

    getPostArray();
  }, [typeState]);

  return (
    <>
      <Helmet>
        <title>BLOG. - 오늘의 학습을 기록해 보세요</title>
      </Helmet>
      <Body>
        <Header />
        <CategoryBar />
        <PostInfoContainer>
          <PostInfo
            key="example"
            id="example"
            thumbnailUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Poodel-Standard.jpg/250px-Poodel-Standard.jpg"
            title="제목입니다아"
            content="본문입니다아아아아"
          />
          {postArray.map((post) =>
            <PostInfo
              key={post['_id']}
              id={post['_id']}
              title={post?.title}
              content={post?.content}
              date={post?.createdAt}
            />
          )}
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
