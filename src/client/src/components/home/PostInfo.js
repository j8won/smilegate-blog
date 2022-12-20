import styled from "styled-components";
import { HiHeart } from 'react-icons/hi';

function PostInfo({ thumbnailUrl }) {
  return (
    <Container>
      {thumbnailUrl ? (<Thumbnail src={thumbnailUrl}/>) : undefined}
      <TextInfoBox>
        <div className="title">하이하이하이ㅇㅇㅇㅇㅇ 제목입니다ㅇㅇㅇㅇ</div>
        <div className="content">콘텐츠다다아아아아</div>
      </TextInfoBox>
      <BottomBar>
        <div className="sub-info">
          <span>2022년 12월 17일</span>
          <span> · </span>
          <span>10개의 댓글</span>
        </div>
        <div className="likes">
          <div className="icon">
            <HiHeart/>
          </div>
          <div className="num">12</div>
        </div>
      </BottomBar>
    </Container>
  )
}

const Container = styled.div`
  height: 350px;
  margin: 2.5%;
  position: relative;
  
  background-color: ${props => props.theme.subBgColor};
  border-radius: 5px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const TextInfoBox = styled.div`
  padding: 16px;
  
  .title {
    width: 100%;
    margin-bottom: 4px;
    font-weight: 700;
    font-size: 16px;
  }
  
  .content {
    width: 100%;
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px 16px;
  position: absolute;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  bottom: 0;
  border-top: 1px solid ${props => props.theme.borderColor};

  font-size: 12px;
  .sub-info {
    color: ${props => props.theme.additiveColor};
  }
  
  .likes {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .num {
    height: 100%;
    padding-left: 7.5px;
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default PostInfo;