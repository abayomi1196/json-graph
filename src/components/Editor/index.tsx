import Editor, { loader } from "@monaco-editor/react";
import { useContext } from "react";

import { JSONContext } from "context/JSONContext";

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
  const { json, updateJSON } = useContext(JSONContext);

  return (
    <Wrapper>
      <Editor
        height='100vh'
        defaultLanguage='json'
        value={json}
        theme='default' // default | vs-dark
        options={editorOptions}
        onChange={(val) => updateJSON(val!)}
      />
    </Wrapper>
  );
}

export default CustomEditor;
