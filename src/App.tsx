import { Editor, Navbar } from "components";
import { MainWrapper } from "styles/globalStyles";
import Graph from "components/Graph";

function App() {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <Editor />
        <Graph />
      </MainWrapper>
    </>
  );
}

export default App;
