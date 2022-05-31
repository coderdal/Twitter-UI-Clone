import React from "react";

import styled from "styled-components";
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../assets/icons";

import ProfilePicture from "../assets/images/profile-picture.png";

const TweetStyled = styled.div`
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  padding: 6px 16px;
  cursor: pointer;
  transition: 200ms all ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }

  &:hover {
    background: var(--tweet-hover-bg-color);
  }
`;

const ProfilePictureStyled = styled.div`
  padding: 8px 0;
  width: 50px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const TweetHeaderStyled = styled.div`
  display: flex;
  height: 42px;
`;

const TweetHeadStyled = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 0 0 14px;
  display: flex;
  align-items: center;

  h4 {
    font-size: 1em;
    font-weight: 600;
    margin-right: 5px;
  }

  p,
  span {
    color: var(--text-light-color);
    margin: 0 2px;
    font-size: 0.95em;
  }
`;

const TweetBodyStyled = styled.div`
  width: 88%;
  margin-left: 64px;
  margin-top: -4px;
  padding-bottom: 8px;

  p {
    font-size: 0.98em;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    padding: 10px 10px 10px 0px;
  }
`;

const TweetActionsStyled = styled.div`
  width: 86%;
  margin-left: 60px;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
`;

const TweetActionStyled = styled.button`
  width: 60px;
  height: 20px;
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-light-color);
  cursor: pointer;
  transition: 200ms color ease-out;

  svg {
    transition: 200ms all ease-out;
  }

  &:hover {
    color: ${(props) =>
      props.reply
        ? "rgba(29, 155, 240, 0.5)"
        : props.retweet
        ? "rgba(0, 186, 124, 0.5)"
        : props.like
        ? "rgba(249, 24, 128, 0.5)"
        : props.share && "rgba(29, 155, 240, 0.5)"};

    svg {
      fill: ${(props) =>
        props.reply
          ? "rgba(29, 155, 240, 0.5)"
          : props.retweet
          ? "rgba(0, 186, 124, 0.5)"
          : props.like
          ? "rgba(249, 24, 128, 0.5)"
          : props.share && "rgba(29, 155, 240, 0.5)"};
    }

    div {
      background: ${(props) =>
        props.reply
          ? "rgba(29, 155, 240, 0.1)"
          : props.retweet
          ? "rgba(0, 186, 124, 0.1)"
          : props.like
          ? "rgba(249, 24, 128, 0.1)"
          : props.share && "rgba(29, 155, 240, 0.1)"};
    }
  }
`;

const TweetActionIconStyled = styled.div`
  width: 32px;
  height: 32px;
  padding: 6px;
  transition: 200ms background ease-out;
  border-radius: 50%;
`;

const Tweet = ({
  avatar,
  name,
  username,
  time,
  tweet,
  replyCount,
  retweetCount,
  likeCount,
  image,
}) => {
  return (
    <TweetStyled>
      <TweetHeaderStyled>
        <ProfilePictureStyled>
          <img src={avatar || ProfilePicture} alt="Profile" />
        </ProfilePictureStyled>

        <TweetHeadStyled>
          <h4>{name || "Erdal | React Dev"}</h4>
          <p>@{username || "coderdal"}</p>
          <span>•</span>
          <p>{time || "2h"}</p>
        </TweetHeadStyled>
      </TweetHeaderStyled>

      <TweetBodyStyled>
        <p>
          {tweet ||
            "Hello, this is a test message. This project developed by Muhammed Erdal"}
        </p>
        {image && <img src={image} alt="Tweet" />}
      </TweetBodyStyled>

      <TweetActionsStyled>
        <TweetActionStyled reply>
          <TweetActionIconStyled reply>
            <ReplyIcon />
          </TweetActionIconStyled>
          {replyCount || 37}
        </TweetActionStyled>

        <TweetActionStyled retweet>
          <TweetActionIconStyled retweet>
            <RetweetIcon />
          </TweetActionIconStyled>
          {retweetCount || 21}
        </TweetActionStyled>

        <TweetActionStyled like>
          <TweetActionIconStyled like>
            <LikeIcon />
          </TweetActionIconStyled>
          {likeCount || 124}
        </TweetActionStyled>

        <TweetActionStyled share>
          <TweetActionIconStyled share>
            <ShareIcon />
          </TweetActionIconStyled>
        </TweetActionStyled>
      </TweetActionsStyled>
    </TweetStyled>
  );
};

export default Tweet;
