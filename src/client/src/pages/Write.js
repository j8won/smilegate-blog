import PageTitle from "../components/PageTitle";
import StyledBody from "../styles/StyledBody";

import TuiEditor from "../components/write/TuiEditor";
import Header from "../components/Header";
import {useRef} from "react";
import styled from "styled-components";
import {MdOutlineSaveAlt} from 'react-icons/md';
import {useRecoilValue} from "recoil";
import editorState from "../recoil/atoms/editorState";
import PostAPI from "../lib/api/PostAPI";

function Write() {
  const editorRef = useRef();
  const editor = useRecoilValue(editorState);

  const onSubmitClick = async () => {
    if (editor.title.replace(/(\s*)/g,'') === "" || editorRef.current?.getInstance().getMarkdown().replace(/(\s*)/g,'') === "") {
      return;
    }

    await PostAPI.createPost(editor.title, editorRef.current?.getInstance().getMarkdown(), editor.category);
  };

  return (
    <>
      <PageTitle title="글쓰기" />
      <StyledBody>
        <Header />
        <TuiEditor
          editorRef={editorRef}
        />
        <SubmitButton onClick={onSubmitClick}>
          <MdOutlineSaveAlt />
        </SubmitButton>
      </StyledBody>
    </>
  )
}

const SubmitButton = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 40px;
  right: 60px;

  @media screen and (min-width: 1025px) {
    bottom: 40px;
    right: calc(50vw - 512.5px + 60px);
  }

  background-color: ${props => props.theme.orange};
  color: white;
  border-radius: 1000px;
  font-size: 26px;
  cursor: pointer;
`;

export default Write;
