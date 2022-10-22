import { Editor, Navbar } from "components";
import Graph from "components/Graph";
import { MainWrapper } from "styles/globalStyles";
import { JSONContextProvider } from "context/JSONContext";

function App() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <JSONContextProvider>
          <Editor />
          <Graph />
        </JSONContextProvider>
      </MainWrapper>
    </>
  );
}

export default App;
