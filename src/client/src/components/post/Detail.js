import styled from "styled-components";
import {Viewer} from "@toast-ui/react-editor";
import {useRecoilState, useRecoilValue} from "recoil";
import detailState from "../../recoil/atoms/detailState";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import likeState from "../../recoil/atoms/likeState";
import LikeAPI from "../../lib/api/LikeAPI";
import {useParams} from "react-router-dom";
import {useCallback} from "react";

function Detail() {
  const detail = useRecoilValue(detailState);
  const [like, setLike] = useRecoilState(likeState);
  const params = useParams();

  const onLikeClick = useCallback(async () => {
    if (like !== false) {
      setLike(!like);
      await LikeAPI.deleteLike(params.id);
    } else {
      setLike(!like);
      await LikeAPI.createLike(params.id);
    }
  }, [params.id])

  return (
    <Container>
      <Title>{detail.title}</Title>
      <CenterBar>
        <Type>{detail.category}</Type>
        <Heart onClick={onLikeClick}>
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </Heart>
      </CenterBar>
      <Viewer
        initialValue={detail.content}
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 30px;

  .toastui-editor-contents {
    color: ${props => props.theme.bodyColor};
  }
`;

const Title = styled.div`
  width: 100%;
  margin: 0;

  font-size: 36px;
  font-weight: 600;
  color: ${props => props.theme.highlightColor};
`;

const CenterBar = styled.div`
  width: 100%;
  height: 34px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Type = styled.div`
  min-width: 50px;
  padding: 10px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.orange};

  border: 2px solid ${props => props.theme.orange};
  border-radius: 10000px;
`;

const Heart = styled.div`
  height: 100%;
  font-size: 24px;
  color: ${props => props.theme.orange};
`;

export default Detail;
