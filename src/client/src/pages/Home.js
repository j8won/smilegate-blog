import {Helmet} from "react-helmet-async";
import { useRecoilValue} from "recoil";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {HiPencil} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

import Header from "../components/Header";
import StyledBody from "../styles/StyledBody";
import CategoryBar from "../components/home/CategoryBar";
import PostInfo from "../components/home/PostInfo";
import categoryState from "../recoil/atoms/categoryState";
import PostAPI from "../lib/api/PostAPI";
import routes from "../routes";

function Home() {
  const [postArray, setPostArray] = useState([]);
  const typeState = useRecoilValue(categoryState);
  const navigate = useNavigate();

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
      <StyledBody>
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
              cntComment={post?.cntComment}
              cntLike={post?.cntLike}
            />
          )}
        </PostInfoContainer>
        <WriteButton onClick={() => {navigate(routes.write)}}>
          <HiPencil />
        </WriteButton>
      </StyledBody>
    </>
  )
}

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

const WriteButton = styled.div`
  width: 50px;
  height: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  bottom: 40px;
  right: 40px;
  
  @media screen and (min-width: 1025px) {
    bottom: 40px;
    right: calc(50vw - 512.5px + 40px);
  }
  
  background-color: ${props => props.theme.orange};
  border-radius: 1000px;
  font-size: 26px;
`;

export default Home;
