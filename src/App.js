import styled, { createGlobalStyle } from "styled-components";
import AboutMe from "./component/AboutMe";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Intro from "./component/Intro"
import Projects from "./component/Projects";
import Stacks from "./component/Stacks";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  text-decoration: none;
  list-style: none;
}
#root {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
section {
  margin: 30px;
}
`;

const SLayout = styled.main`
  border: 1px solid black;
  width: 1170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
