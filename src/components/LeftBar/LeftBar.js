import React from "react";

import styled from "styled-components";
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  ThreeDotsIcon,
  TwitterIcon,
} from "../assets/icons";

import ProfilePicture from "../assets/images/profile-picture.png";

const LeftBarRoot = styled.header`
  width: 290px;
  height: 100vh;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  @media screen and (max-width: 1300px) {
    width: 130px;
  }
`;

/* Header */

const LeftBarHeader = styled.nav`
  position: fixed;
  width: 275px;
  height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

const LeftBarItem = styled.div`
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin-bottom: ${(props) => props.mainIcon && "8px"};
`;

const ItemContent = styled.div`
  height: 100%;
  padding: 2px 26px 2px 8px;
  border-radius: 50px;
  font-weight: 400;
  display: flex;
  align-items: center;
  transition: 150ms background ease-in-out;
  font-weight: ${(props) => props.current && "700"};
  &:hover {
    background: ${(props) => !props.mainIcon && "var(--hover-bg-color)"};
  }
  svg {
    width: 50px;
    height: 50px;
    width: ${(props) => props.mainIcon && "55px"};
    height: ${(props) => props.mainIcon && "55px"};
    border-radius: 50%;
    padding: 4px 12px;
    margin-right: 8px;
    transition: 150ms background ease-in-out;
    &:hover {
      background: ${(props) => props.mainIcon && "var(--hover-bg-color)"};
    }
  }

  @media screen and (max-width: 1300px) {
    span {
      display: none;
    }
  }
`;

const TweetBtn = styled.a`
  width: 88%;
  margin: 10px 0px 0px 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1em;
  height: 52px;
  background: var(--button-blue-color);
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: 150ms opacity ease-in;
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1300px) {
    width: 35%;
  }
`;

/* Footer */

const LeftBarFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 285px;
  flex: 1;
  padding: 0 6px;
  @media screen and (max-width: 1300px) {
    width: 130px;
  }
`;

const FooterRoot = styled.div`
  width: 100%;
  padding: 12px;
`;

const FooterProfile = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 50px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: var(--hover-bg-color);
  }
`;

const FooterProfileDetails = styled.div`
  display: flex;
  gap: 12px;
`;

const FooterProfileDetailsText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 700;
    font-size: 1em;
  }

  span {
    color: var(--text-light-color);
    font-size: 0.9em;
    font-weight: 500;
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const LeftBar = () => {
  return (
    <LeftBarRoot>
      <LeftBarHeader>
        <LeftBarItem mainIcon>
          <ItemContent mainIcon>
            <TwitterIcon />
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent current>
            <HomeIcon />
            <span>Home</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <ExploreIcon />
            <span>Explore</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <NotificationsIcon />
            <span>Notifications</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <MessagesIcon />
            <span>Messages</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <BookmarksIcon />
            <span>Bookmarks</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <ListsIcon />
            <span>Lists</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <ProfileIcon />
            <span>Profile</span>
          </ItemContent>
        </LeftBarItem>
        <LeftBarItem>
          <ItemContent>
            <MoreIcon />
            <span>More</span>
          </ItemContent>
        </LeftBarItem>

        <TweetBtn>Tweet</TweetBtn>
      </LeftBarHeader>

      <LeftBarFooter>
        <FooterRoot>
          <FooterProfile>
            <FooterProfileDetails>
              <img src={ProfilePicture} alt="Profile" />
              <FooterProfileDetailsText>
                <h3>Cod Erdal</h3>
                <span>@cod_erdal</span>
              </FooterProfileDetailsText>
            </FooterProfileDetails>
            <ThreeDotsIcon />
          </FooterProfile>
        </FooterRoot>
      </LeftBarFooter>
    </LeftBarRoot>
  );
};

export default LeftBar;
