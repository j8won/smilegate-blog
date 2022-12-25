import StyledBody from "../styles/StyledBody";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Header from "../components/Header";
import Detail from "../components/post/Detail";
import PageTitle from "../components/PageTitle";
import {useRecoilState, useSetRecoilState} from "recoil";
import detailState from "../recoil/atoms/detailState";
import PostAPI from "../lib/api/PostAPI";
import LikeAPI from "../lib/api/LikeAPI";
import likeState from "../recoil/atoms/likeState";

function Post() {
  const params = useParams();
  const [detail, setDetail] = useRecoilState(detailState);
  const setLike = useSetRecoilState(likeState);


  useEffect(()=>{
    const loadPost = async () => {
      const { data } = await PostAPI.getPostById(params.id);
      return data;
    }

    const loadLike = async () => {
      const { data } = await LikeAPI.getLike(params.id);
      return data;
    }

    loadPost().then(r => {
      setDetail({
        id: params.id,
        title: r.data.title,
        content: r.data.content,
        category: r.data.category,
      })
    });

    loadLike().then(r => {
      if (r.data !== null) {
        setLike(true);
      } else {
        setLike(false);
      }
    });

  }, [params.id])

  return (
    <>
      <PageTitle title={detail.title} />
      <StyledBody>
        <Header />
        <Detail
          key={params.id}
        />
      </StyledBody>
    </>
)
}

export default Post;
