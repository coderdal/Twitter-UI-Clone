import React, { useState } from "react";

import styled from "styled-components";
import { SearchIcon } from "../assets/icons";

const RightBarRoot = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 15px;
  margin-top: 6px;
`;

const RightBarStyled = styled.div`
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
      </RightBarStyled>
    </RightBarRoot>
  );
};

export default RightBar;
