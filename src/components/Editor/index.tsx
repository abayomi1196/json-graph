import Editor, { loader } from "@monaco-editor/react";
import { defaultJSON } from "constants/data";

import { Wrapper } from "./styles";

loader.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs"
  }
});

const editorOptions = {
  formatOnPaste: true,
  minimap: {
    enabled: false
  }
};

function CustomEditor() {
  return (
    <Wrapper>
      <Editor
        height='100vh'
        defaultLanguage='json'
        value={defaultJSON}
        theme='vs-dark'
        options={editorOptions}
      />
    </Wrapper>
  );
}

export default CustomEditor;
