import React, { useState } from "react";

import ProfilePicture from "../assets/images/profile-picture.png";

import styled from "styled-components";

import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
  SparklesIcon,
  WorldIcon,
} from "../assets/icons";

const SendTweetStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
`;

const HeaderStyled = styled.div`
  width: 100%;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;

  svg {
    box-sizing: content-box;
    width: 20px;
    height: 20px;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
    transition: 150ms background ease-in-out;

    &:hover {
      background: var(--hover-bg-color);
    }
  }

  h3 {
    font-weight: 700;
  }
`;

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4px 14px;
`;

const MainInputStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }

  textarea {
    resize: none;
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    color: var(--text-color);
    font-family: inherit;
    font-size: 1.22em;
    padding: 14px 18px;
    width: 100%;
    height: 46px;

    ::placeholder {
      color: var(--text-light-color);
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MainEveryoneStyled = styled.div`
  width: 86%;
  height: 50px;
  color: var(--blue-color);
  margin-left: 70px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border-color);

  span {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    font-weight: 600;
    font-size: 0.9em;
    cursor: pointer;
    svg {
      height: 18px;
      margin-right: 3px;
    }

    span {
      width: 32%;
      border-radius: 12px;
      padding: 0 10px;
      transition: 150ms background ease-in-out;
      &:hover {
        background: var(--hover-bg-color);
      }
    }
  }
`;

const FooterStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonsStyled = styled.div`
  width: 86%;
  margin-left: 80px;
  display: flex;
  gap: 3px;
  padding: 12px 0;

  button {
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      background: var(--hover-blue-bg-color);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ButtonStyled = styled.button`
  width: 100px;
  height: 36px;
  border-radius: 20px;
  background: ${(props) =>
    !props.disabled ? "var(--button-blue-color)" : "rgba(25, 93, 141, 0.767)"};
  border: none;
  outline: none;
  cursor: ${(props) => (!props.disabled ? "pointer" : "default")};
  color: ${(props) =>
    !props.disabled ? "var(--text-color)" : "rgba(255, 255, 255, 0.39)"};
  font-weight: 600;
  font-size: 0.9em;
`;

const SendTweet = () => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  return (
    <SendTweetStyled>
      <HeaderStyled>
        <h3>Home</h3>
        <SparklesIcon />
      </HeaderStyled>
      <MainStyled>
        <MainInputStyled>
          <img src={ProfilePicture} alt="Profile" />
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="What's happening?"
            onFocus={handleFocus}
          />
        </MainInputStyled>
        {isFocused && (
          <MainEveryoneStyled>
            <span>
              <span>
                <WorldIcon />
                Everyone can reply
              </span>
            </span>
          </MainEveryoneStyled>
        )}
      </MainStyled>

      <FooterStyled>
        <ButtonsStyled>
          <button>
            <MediaIcon />
          </button>
          <button>
            <GifIcon />
          </button>
          <button>
            <PollIcon />
          </button>
          <button>
            <EmojiIcon />
          </button>
          <button>
            <ScheduleIcon />
          </button>
          <button>
            <LocationIcon />
          </button>
        </ButtonsStyled>

        {input.length > 0 ? (
          <ButtonStyled>Tweet</ButtonStyled>
        ) : (
          <ButtonStyled disabled>Tweet</ButtonStyled>
        )}
      </FooterStyled>
    </SendTweetStyled>
  );
};

export default SendTweet;
