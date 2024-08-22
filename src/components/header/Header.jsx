import React from "react";
import { HeaderItem } from "./HeaderItem";
import { HeaderNavigate } from "./HeaderNavigate";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderItem />
      <HeaderNavigate />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
