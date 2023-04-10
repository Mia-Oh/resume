import AboutMe from "./component/AboutMe";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Intro from "./component/Intro"
import Projects from "./component/Projects";
import Stacks from "./component/Stacks";

import { GlobalStyle, SLayout } from "./style/style";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <SLayout>
        <Intro />
        <AboutMe />
        <Stacks />
        <Projects />
        <Education />
        <Experience />
      </SLayout>
    </>
  );
}

export default App;
