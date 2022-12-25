import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';

import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'

import {useRecoilState, useRecoilValue} from "recoil";
import styled from "styled-components";
import darkModeState from "../../recoil/atoms/darkModeState";
import {useCallback, useRef} from "react";
import editorState from "../../recoil/atoms/editorState";
import CATEGORY_TYPES from "../../constant/CATEGORY_TYPES";
import ImageAPI from '../../lib/api/ImageAPI';

function TuiEditor({ editorRef }) {
  const isDarkMode = useRecoilValue(darkModeState);
  const [editor, setEditor] = useRecoilState(editorState);
  const titleRef = useRef();

  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  const onImageUpload = async (blob, callback) => {
    const form = new FormData();
    form.append('file', blob);

    const response = ImageAPI.postImage(form);

    callback(process.env.REACT_APP_SERVER_API + '/image/' + response.data.filename, response.data.filename);

    if (editor.thumbnailUrl === "") {
      setEditor({...editor, thumbnailUrl: response.data.filename});
    }
  };

  const handleTitleResize = useCallback(() => {
    if (titleRef === null || titleRef.current === null) {
      return;
    }
    titleRef.current.style.height = titleRef.current.scrollHeight + "px";
  }, []);

  return (
    <Container>
      <TitleEditor
        ref={titleRef}
        placeholder="제목을 입력하세요."
        rows={1}
        onChange={e => {
          setEditor({...editor, title: e.target.value});
          handleTitleResize();
        }}
      >
        {editor.title !== "" ? editor.title : undefined}
      </TitleEditor>
      <CategoryBar>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={editor.category}
            label="Age"
            onChange={(e) => {
              setEditor({...editor, category: e.target.value});
            }}
          >
            {CATEGORY_TYPES.ARRAY.map((type) => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </CategoryBar>
      <Editor
        ref={editorRef}
        initialValue={editor.content}
        placeholder="내용을 입력하세요."
        theme={isDarkMode ? 'dark' : ""}
        height="100%"
        previewStyle={window.innerWidth > 600 ? 'vertical' : 'tab'}
        hideModeSwitch={true}
        initialEditType="markdown"
        toolbarItems={toolbarItems}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        hooks={{
          addImageBlobHook: onImageUpload
        }}
      />
    </Container>
)
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 96px - 44px - 76px);
  padding: 30px;
`;

const CategoryBar = styled.div`
  margin: 0 0 20px 0;
  .MuiInputBase-root {
    color: ${props => props.theme.additiveColor};
  }
  
  .MuiSvgIcon-root {
    color: ${props => props.theme.additiveColor};
  }
  
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${props => props.theme.additiveColor};
    
    &:hover {
      border: 1px solid ${props => props.theme.additiveColor};
      outline: none;
    }
  }
  
  .MuiInputLabel-root {
    color: ${props => props.theme.additiveColor};
  }
  
`;

const TitleEditor = styled.textarea`
  width: 100%;
  height: 44px;
  margin: 0 5px 20px 5px;
  padding: 0;

  font-size: 36px;
  font-weight: 600;
  font-style: inherit;

  border: none;
  outline: none;
  resize: none;

  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.bodyColor};
`;

export default TuiEditor;
