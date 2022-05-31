import React from "react";

import styled from "styled-components";
import SendTweet from "./SendTweet";
import Tweet from "./Tweet";

const MainStyled = styled.main`
  width: 600px;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  border-left: 1px solid var(--border-color);
`;

const TweetListStyled = styled.div`
  width: 100%;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainStyled>
      <SendTweet />
      <TweetListStyled>
        <Tweet />
        <Tweet
          avatar="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/34/posts/29003/preview_image/react.js.png"
          name="Cod Erdal"
          username="muhammederdal"
          time="5h"
          tweet="Hi, I'm Muhammed Erdal, this project developed with React js."
        />
        <Tweet
          avatar="https://scalablecss.com/static/7032bdcf0d4b4b05cf487ac062ee0d72/21b4d/styled-components-global-styles.png"
          name="Muhammed Erdal"
          username="muhammederdal"
          time="12h"
          tweet="Hi dear visitor, I used styled-components to style this app."
        />
        <Tweet
          avatar="https://kitweb.pro/wp-content/uploads/2021/09/react.jpg"
          name="Erdal 💙 React"
          username="muhammederdal"
          time="17h"
          tweet="I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ I love react ❤ "
          image={"https://kitweb.pro/wp-content/uploads/2021/09/react.jpg"}
        />
      </TweetListStyled>
    </MainStyled>
  );
};

export default Main;
