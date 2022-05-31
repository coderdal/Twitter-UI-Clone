import React, { useState } from "react";

import styled from "styled-components";
import { SearchIcon } from "../assets/icons";

const RightBarRoot = styled.aside`
  flex: 1;
  margin-left: 15px;
  margin-top: 6px;
`;

const RightBarStyled = styled.section`
  position: sticky;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  svg {
    position: absolute;
    left: 10%;
    top: 12px;
    width: 20px;
    height: 20px;
  }

  input {
    font-size: 0.9em;
    padding: 0 55px;
    font-weight: 400;
    height: 44px;
    width: 90%;
    border: none;
    border-radius: 35px;
    background: var(--hover-bg-color);
    color: var(--text-color);
    transition: 200ms border ease-out;

    ::placeholder {
      color: var(--text-light-color);
    }

    &:focus {
      border: 0.1px solid var(--search-border-color);
      outline: 0.1px solid var(--search-border-color);
    }
  }
`;

const TrendsStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 20px;
`;

const TrendsListStyled = styled.div`
  width: 100%;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background: var(--trends-bg-color);

  h2 {
    padding: 10px 15px;
    font-size: 1.25em;
  }
`;

const TrendItemStyled = styled.a`
  width: 100%;
  padding: 18px 15px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1em;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  border-bottom-left-radius: none;
  border-bottom-right-radius: none;

  :last-child {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &:hover {
    background: var(--hover-bg-color);
  }

  span {
    color: var(--text-light-color);
    font-weight: 400;
    font-size: 0.77em;
  }
`;

const RightBar = () => {
  const [search, setSearch] = useState("");

  return (
    <RightBarRoot>
      <RightBarStyled>
        <SearchBarStyled>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Twitter"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </SearchBarStyled>

        <TrendsStyled>
          <TrendsListStyled>
            <h2>Trends for you</h2>

            <TrendItemStyled
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #ReactJS
              <span>126.9K Tweets</span>
            </TrendItemStyled>

            <TrendItemStyled
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
              <span>64.2K Tweets</span>
            </TrendItemStyled>

            <TrendItemStyled
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @muhammederdal
              <span>34.7K Tweets</span>
            </TrendItemStyled>

            <TrendItemStyled
              href="https://github.com/coderdal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <span>12.9K Tweets</span>
            </TrendItemStyled>

            <TrendItemStyled
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <span>12.9K Tweets</span>
            </TrendItemStyled>

            <TrendItemStyled
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              I love React
              <span>9.9K Tweets</span>
            </TrendItemStyled>
          </TrendsListStyled>
        </TrendsStyled>
      </RightBarStyled>
    </RightBarRoot>
  );
};

export default RightBar;
