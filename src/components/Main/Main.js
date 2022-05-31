import React from "react";

import styled from "styled-components";
import SendTweet from "./SendTweet";

const MainStyled = styled.main`
  width: 600px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainStyled>
      <SendTweet />
    </MainStyled>
  );
};

export default Main;
