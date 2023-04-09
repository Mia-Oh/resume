import styled, { createGlobalStyle } from "styled-components";
import Intro from "./component/Intro"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  text-decoration: none;
  list-style: none;
}
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
`;

const SLayout = styled.main`
  width: 1170px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SLayout>
        <Intro />
      </SLayout>
    </>
  );
}

export default App;
