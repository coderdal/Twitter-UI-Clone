import React from "react";

import styled from "styled-components";
import LeftBar from "./components/LeftBar/LeftBar";
import Main from "./components/Main/Main";
import RightBar from "./components/RightBar/RightBar";

const MainRoot = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  return (
    <MainRoot>
      <LeftBar />
      <Main />
      <RightBar />
    </MainRoot>
  );
};

export default App;
