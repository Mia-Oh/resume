import styled from "styled-components";
import Intro from "./component/Intro"

const SLayout = styled.main`
  width: 1170px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <SLayout>
        <Intro />
      </SLayout>
    </>
  );
}

export default App;
