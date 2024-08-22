import React from "react";
import { description } from "../../utils/constants/general";
import { CgChevronDown, CgMenuGridO } from "react-icons/cg";

import { FaTrello } from "react-icons/fa";
import styled from "styled-components";

export const HeaderItem = () => {
  return (
    <StyledHeaderMenu>
      <CgMenuGridO color="white" fontSize={40} />
      <section>
        <FaTrello color="white" fontSize={30} />
        <h2>TRELLO</h2>
      </section>
      <article>
        {description.map((item) => (
          <StyledSection key={item.id}>
            <p>{item.title}</p>
            <CgChevronDown />
          </StyledSection>
        ))}
      </article>
      <button>Создать</button>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 17px;
    background-color: #c8b9b9;
    &:hover {
      background-color: #80808092;
      transition: all 0.09s ease-in-out;
    }
  }
  & > section {
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;
  }
  & > article {
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
    margin-left: 20px;
    font-size: 17px;
  }
`;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    transition: all 0.1s ease-in-out;
  }
`;
